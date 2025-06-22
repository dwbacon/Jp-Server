const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(__dirname, 'users.json');
const saltRounds = 10;

// --- User Data Store ---
// Simple JSON based "database" of users
let users = {};

function loadUsers() {
    try {
        if (fs.existsSync(USERS_FILE)) {
            const data = fs.readFileSync(USERS_FILE, "utf8");
            users = JSON.parse(data);
        }
    } catch (err) {
        console.error("Error reading users file:", err);
        users = {};
    }
    if (!users.Derek) {
        users.Derek = {
            username: "Derek",
            passwordHash: "$2b$10$icRAgpUQTXfsP.it5Mrdf.HXOpTSK/w4TIRKODphMcwMY58HjyiXm",
            isAdmin: true
        };
        saveUsers();
    }
    const dfile = getDataFile('Derek');
    if (!fs.existsSync(dfile)) {
        writeData('Derek', defaultData);
    }
}

function saveUsers() {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error("Error writing users file:", err);
    }
}

loadUsers();



// --- Middleware Setup ---

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(session({
    secret: 'a-very-secret-key-for-the-japan-fund',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

// --- Authentication Middleware ---
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    res.status(401).json({ success: false, message: 'Unauthorized. Please log in.' });
};

const isAdmin = (req, res, next) => {
    const user = req.session.user && users[req.session.user.username];
    if (user && user.isAdmin) {
        return next();
    }
    res.status(403).json({ success: false, message: 'Forbidden' });
};

// --- Data File Helpers ---
const defaultData = {
    currentBalance: 0,
    goalAmount: 40000,
    targetDate: '2028-08-15',
    income: [],
    workShifts: [],
    expenses: [],
    settings: {
        paySchedule: 'bi-weekly',
        lastPayDate: '2025-06-06',
        hourlyRate: 15.00,
        taxRate: 0.22
    }
};

function getDataFile(username) {
    return path.join(DATA_DIR, `${username}.json`);
}

function readData(username) {
    const file = getDataFile(username);
    try {
        if (fs.existsSync(file)) {
            const data = fs.readFileSync(file, 'utf8');
            return JSON.parse(data);
        }
        return defaultData;
    } catch (error) {
        console.error('Error reading data file:', error);
        return defaultData;
    }
}

function writeData(username, data) {
    const file = getDataFile(username);
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing data file:', error);
        return false;
    }
}

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}
// --- API Routes ---

// --- Authentication Routes ---
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users[username];

    if (user) {
        // *** THIS IS THE CORRECTED LINE ***
        // It now correctly compares the password against the hash stored for the user.
        const match = await bcrypt.compare(password, user.passwordHash);
        
        if (match) {
            req.session.user = { username: user.username };
            return res.json({ success: true, message: 'Login successful' });
        }
    }
    // If user not found or password doesn't match
    res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Missing fields' });
    }
    if (users[username]) {
        return res.status(400).json({ success: false, message: 'User already exists' });
    }
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        users[username] = { username, passwordHash: hash, isAdmin: false };
        saveUsers();
        writeData(username, defaultData);
        res.json({ success: true, message: 'Account created' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Registration failed' });
    }
});

app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) { return res.status(500).json({ success: false, message: 'Could not log out' }); }
        res.clearCookie('connect.sid');
        res.json({ success: true, message: 'Logged out successfully' });
    });
});

app.get('/api/auth/status', (req, res) => {
    if (req.session.user) {
        res.json({ authenticated: true, username: req.session.user.username });
    } else {
        res.json({ authenticated: false });
    }
});

// --- Admin Routes ---
app.get('/api/users', isAuthenticated, isAdmin, (req, res) => {
    res.json({ users: Object.keys(users) });
});

app.post('/api/users/update', isAuthenticated, isAdmin, async (req, res) => {
    const { username, newUsername, newPassword } = req.body;
    const user = users[username];
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    if (newUsername && username !== newUsername) {
        if (users[newUsername]) {
            return res.status(400).json({ success: false, message: 'Target username exists' });
        }
        const oldFile = getDataFile(username);
        const newFile = getDataFile(newUsername);
        if (fs.existsSync(oldFile)) fs.renameSync(oldFile, newFile);
        users[newUsername] = { ...user, username: newUsername };
        delete users[username];
    }
    if (newPassword) {
        user.passwordHash = await bcrypt.hash(newPassword, saltRounds);
    }
    saveUsers();
    res.json({ success: true });
});

app.get('/api/users/:username/data', isAuthenticated, isAdmin, (req, res) => {
    const target = req.params.username;
    if (!users[target]) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json(readData(target));
});

// --- Protected Data Routes ---
app.get('/api/data', isAuthenticated, (req, res) => {
    const user = req.session.user.username;
    res.json(readData(user));
});
app.post('/api/data', isAuthenticated, (req, res) => {
    const user = req.session.user.username;
    if (writeData(user, req.body)) { res.json({ success: true, message: 'Data saved successfully' }); }
    else { res.status(500).json({ success: false, message: 'Failed to save data' }); }
});
app.get('/api/backup', isAuthenticated, (req, res) => {
    const user = req.session.user.username;
    const data = readData(user);
    const timestamp = new Date().toISOString().split('T')[0];
    res.setHeader('Content-Disposition', `attachment; filename=japan-fund-backup-${timestamp}.json`);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
});
app.post('/api/restore', isAuthenticated, (req, res) => {
    const user = req.session.user.username;
    if (writeData(user, req.body)) { res.json({ success: true, message: 'Data restored successfully' }); }
    else { res.status(500).json({ success: false, message: 'Failed to restore data' }); }
});

// --- Public Routes ---
app.get('/api/health', (req, res) => { res.json({ status: 'OK', timestamp: new Date().toISOString() }); });
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')); });

// --- Server Start ---
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Japan Fund Tracker Server running on http://localhost:${PORT}`);
    console.log(`💾 Data directory: ${DATA_DIR}`);
});

process.on('SIGINT', () => {
    console.log('\n🛑 Server shutting down...');
    process.exit(0);
});
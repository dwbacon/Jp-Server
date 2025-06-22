const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'japan-fund-data.json');
const saltRounds = 10;

// --- User Data Store ---
// In a real application, this would be a database.
const users = {
    'Derek': {
        username: 'Derek',
        passwordHash: '$2b$10$icRAgpUQTXfsP.it5Mrdf.HXOpTSK/w4TIRKODphMcwMY58HjyiXm' 

    }
};


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
function readData() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
        return defaultData;
    } catch (error) {
        console.error('Error reading data file:', error);
        return defaultData;
    }
}

function writeData(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing data file:', error);
        return false;
    }
}

if (!fs.existsSync(DATA_FILE)) { 
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2)); 
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

// --- Protected Data Routes ---
app.get('/api/data', isAuthenticated, (req, res) => { res.json(readData()); });
app.post('/api/data', isAuthenticated, (req, res) => {
    if (writeData(req.body)) { res.json({ success: true, message: 'Data saved successfully' }); } 
    else { res.status(500).json({ success: false, message: 'Failed to save data' }); }
});
app.get('/api/backup', isAuthenticated, (req, res) => {
    const data = readData();
    const timestamp = new Date().toISOString().split('T')[0];
    res.setHeader('Content-Disposition', `attachment; filename=japan-fund-backup-${timestamp}.json`);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
});
app.post('/api/restore', isAuthenticated, (req, res) => {
    if (writeData(req.body)) { res.json({ success: true, message: 'Data restored successfully' }); } 
    else { res.status(500).json({ success: false, message: 'Failed to restore data' }); }
});

// --- Public Routes ---
app.get('/api/health', (req, res) => { res.json({ status: 'OK', timestamp: new Date().toISOString() }); });
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')); });

// --- Server Start ---
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Japan Fund Tracker Server running on http://localhost:${PORT}`);
    console.log(`💾 Data stored in: ${DATA_FILE}`);
});

process.on('SIGINT', () => {
    console.log('\n🛑 Server shutting down...');
    process.exit(0);
});
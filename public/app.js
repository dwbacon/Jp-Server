        // --- START OF SCRIPT ---
        
        // --- Default Data Structure ---
        const getDefaultData = () => ({
            currentBalance: 0,
            goalAmount: 40000,
            targetDate: '2028-08-15',
            income: [],
            workShifts: [],
            expenses: [],
            recurringExpenses: [],
            settings: {
                paySchedule: 'bi-weekly',
                lastPayDate: '2025-06-06',
                hourlyRate: 15.00,
                taxRate: 0.22,
                darkMode: false
            },
            expenseCategories: [
                { id: 'food', name: 'Food & Dining', color: '#f97316', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path d="M12.383 3.963c.27-.27.653-.414 1.058-.414h.01a1.414 1.414 0 011.058 2.472L7.52 12.983A2.828 2.828 0 015.42 15H3.172a1.414 1.414 0 01-1.058-2.472l6.983-6.983c.27-.27.414-.653.414-1.058v-.01a1.414 1.414 0 01-.128-.528zM4.586 16.414a1.414 1.414 0 100 2.828 1.414 1.414 0 000-2.828zM15 6.414a1.414 1.414 0 100-2.828 1.414 1.414 0 000 2.828zM17.828 9.5a1.414 1.414 0 10-2.828 0 1.414 1.414 0 002.828 0z"/></svg>` },
                { id: 'transportation', name: 'Transportation', color: '#3b82f6', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path fill-rule="evenodd" d="M6.22 8.22a.75.75 0 011.06 0l2.22 2.22a.75.75 0 001.06 0l2.22-2.22a.75.75 0 011.06 1.06l-2.75 2.75a.75.75 0 01-1.06 0L6.22 9.28a.75.75 0 010-1.06z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h13.25c1.035 0 1.875.84 1.875 1.875v7.25c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 13.625v-7.25zm1.875-.375a.375.375 0 00-.375.375v7.25c0 .207.168.375.375.375h13.25a.375.375 0 00.375-.375v-7.25a.375.375 0 00-.375-.375H3.375z" clip-rule="evenodd" /></svg>` },
                { id: 'entertainment', name: 'Entertainment', color: '#8b5cf6', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h13.5A2.25 2.25 0 0019 13.75v-7.5A2.25 2.25 0 0016.75 4H3.25zM16.5 6a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V6.5a.5.5 0 01.5-.5h13zM3 12.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v.75a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-.75z" /></svg>` },
                { id: 'shopping', name: 'Shopping', color: '#ec4899', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h9.5A2.25 2.25 0 0117 4.25v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-2.5a.75.75 0 011.5 0v2.5A2.25 2.25 0 0114.75 18h-9.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M9.44 8.63a.75.75 0 01.12-1.05l5-4.25a.75.75 0 11.94 1.17l-5 4.25a.75.75 0 01-1.06-.12zM12.75 11.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" clip-rule="evenodd" /></svg>` },
                { id: 'bills', name: 'Bills & Utilities', color: '#6b7280', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path d="M11.25 6.5a.75.75 0 00-1.5 0v3.5a.75.75 0 00.75.75h2.5a.75.75 0 000-1.5h-1.75V6.5z" /><path fill-rule="evenodd" d="M6.354 3.354a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 11-1.06-1.06l2.5-2.5a.75.75 0 011.06 0zm9.192 0a.75.75 0 000 1.06l-2.5 2.5a.75.75 0 10-1.06-1.06l2.5-2.5a.75.75 0 001.06 0zM10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM3.5 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM14.25 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" /><path d="M2.875 14.25a.75.75 0 000 1.5h14.25a.75.75 0 000-1.5H2.875z" /></svg>` },
                { id: 'japan_prep', name: 'Japan Prep', color: '#ef4444', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.006 4.994a.75.75 0 011.988 0l2.5 4.25a.75.75 0 01-.643 1.106H6.15a.75.75 0 01-.643-1.106l2.5-4.25zM10 12a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" /></svg>` },
                { id: 'other', name: 'Other', color: '#10b981', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24"><path d="M3.25 4A2.25 2.25 0 015.5 1.75h9A2.25 2.25 0 0116.75 4v11.5A2.25 2.25 0 0114.5 17.75h-9A2.25 2.25 0 013.25 15.5V4zm2.25-.25a.75.75 0 00-.75.75V15.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-9z" /><path d="M9 7.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 019 7.75zM9 11.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75z"/></svg>` }
            ]
        });
        
        // --- Configuration & State ---
        const API_BASE = window.location.origin; let isOnline = true; let isAuthenticated = false; let isAdmin = false; let appData = getDefaultData(); let currentView = window.INIT_VIEW || 'dashboard'; let editingIncome = null; let editingExpense = null; let editingCategory = null; let editingRecurringExpense = null; let selectedDate = new Date().toISOString(); let showAddEvent = false; let editingEvent = null; let currentCalendarDate = new Date(); let eventData = { date: '', endDate: '', startTime: '', endTime: '', type: 'work', description: '' }; let analyticsChart = null; let fullAnalyticsData = {}; let showAllIncomeHistory = false; let dashboardGrowthChart = null; let dashboardExpenseChart = null; let currentCalendarView = 'month'; // 'month', 'week', or 'agenda'
        
        // --- Dark Mode ---
        function applyDarkMode(isDark) { document.body.classList.toggle('dark-mode', isDark); }
        function toggleDarkMode() { appData.settings.darkMode = !appData.settings.darkMode; applyDarkMode(appData.settings.darkMode); saveData(); renderView(); }
        
        // --- Authentication & App Lifecycle ---
        async function checkAuthStatus() {
            try {
                const response = await fetch(`${API_BASE}/api/auth/status`, { credentials: 'include' });
                const data = await response.json();
                if (data.authenticated) {
                    isAuthenticated = true;
                    isAdmin = !!data.isAdmin;
                    document.getElementById('user-info').textContent = `Welcome, ${data.username}`;
                    showApp();
                } else {
                    isAuthenticated = false;
                    isAdmin = false;
                    showLogin();
                }
            } catch (error) {
                showLogin();
            }
        }

        async function handleLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const submitBtn = document.getElementById('login-submit-btn');
            const errorDiv = document.getElementById('login-error');
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
            errorDiv.style.display = 'none';
            try {
                const response = await fetch(`${API_BASE}/api/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                if (data.success) {
                    isAuthenticated = true;
                    isAdmin = !!data.isAdmin;
                    document.getElementById('user-info').textContent = `Welcome, ${username}`;
                    showDataStatus('Login successful!', false);
                    showApp();
                } else {
                    errorDiv.textContent = data.message || 'Invalid credentials';
                    errorDiv.style.display = 'block';
                }
            } catch (error) {
                errorDiv.textContent = 'Login failed. Please try again.';
                errorDiv.style.display = 'block';
            } finally {
                submitBtn.textContent = 'Login';
                submitBtn.disabled = false;
            }
        }

        async function logout() {
            try {
                await fetch(`${API_BASE}/api/logout`, { method: 'POST', credentials: 'include' });
                sessionStorage.removeItem('appData');
                isAuthenticated = false;
                isAdmin = false;
                document.getElementById('user-info').textContent = '';
                showDataStatus('Logged out', false);
                showLogin();
            } catch (error) {
                console.error('Logout failed:', error);
            }
        }


        function showLogin() {
            window.location.href = 'login.html';
        }
        function showApp() {
            document.getElementById('app-content').style.display = 'block';
            document.querySelector('.header-sticky-container').style.display = 'block';
            initializeApp();
        }
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
            const mobileNavLinksContainer = mobileNavOverlay.querySelector('.mobile-nav-links');
            const body = document.body;
            const navContainer = document.querySelector('.nav-container');

            mobileNavLinksContainer.innerHTML = navContainer.innerHTML;
            mobileMenuBtn.addEventListener('click', () => { body.classList.toggle('nav-open'); });

            function handleNavClick(e) {
                e.preventDefault();
                body.classList.remove('nav-open');
                const view = this.dataset.view;
                navigateTo(view);
            }

            navContainer.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', handleNavClick);
            });
            mobileNavLinksContainer.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', handleNavClick);
            });

            updateNavButtons(currentView);
            checkAuthStatus();
            history.replaceState({view: currentView}, '', getPageForView(currentView));
        });

        function getPageForView(view) {
            return view === 'dashboard' ? 'index.html' : `${view}.html`;
        }

        function navigateTo(view, skipPush) {
            if (!view || view === currentView) return;
            currentView = view;
            updateNavButtons(view);
            renderView();
            if (!skipPush) {
                history.pushState({view}, '', getPageForView(view));
            }
        }

        window.addEventListener('popstate', (e) => {
            const view = (e.state && e.state.view) || window.INIT_VIEW || 'dashboard';
            navigateTo(view, true);
        });
        function updateNavButtons(view) { document.querySelectorAll('.nav-btn[data-view]').forEach(btn => { btn.classList.toggle('active', btn.dataset.view === view); }); }
        async function initializeApp() {
            try {
                await loadData();
                processRecurringExpenses();
                applyDarkMode(appData.settings.darkMode);
                renderView();
                checkConnection();
            } catch (error) {
                document.getElementById('app-content').innerHTML = `<div class="card"><h2>Error Loading App</h2><p>There was an error loading the application. Please refresh the page.</p><p class="text-gray" style="font-size: 0.8rem;">Error: ${error.message}</p></div>`;
            }
        }
        
        // --- Data & Connection ---
        function checkConnection() {
            fetch(`${API_BASE}/api/health`).then(response => response.json()).then(() => {
                if (!isOnline) {
                    isOnline = true;
                    document.getElementById('connection-status').classList.remove('show');
                    if (isAuthenticated) { showDataStatus('Connection restored', false); }
                }
                updateSyncIndicator();
            }).catch(() => {
                if (isOnline) {
                    isOnline = false;
                    document.getElementById('connection-status').classList.add('show');
                    if (isAuthenticated) { showDataStatus('Connection lost', true); }
                }
                updateSyncIndicator();
            });
        }
        setInterval(checkConnection, 10000);

        async function saveData() {
            if (!isOnline || !isAuthenticated) {
                showDataStatus('Cannot save - offline or not authenticated', true);
                return false;
            }
            try {
                showDataStatus('Saving...', false, true);
                const response = await fetch(`${API_BASE}/api/data`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(appData)
                });
                if (response.status === 401) {
                    showDataStatus('Session expired - please login again', true);
                    showLogin();
                    return false;
                }
                if (response.ok) {
                    sessionStorage.setItem('appData', JSON.stringify(appData));
                    showDataStatus('Saved!', false);
                    return true;
                } else {
                    throw new Error('Server error');
                }
            } catch (error) {
                showDataStatus('Save failed', true);
                return false;
            }
        }
        async function loadData() {
            if (!isAuthenticated) return false;
            const cached = sessionStorage.getItem('appData');
            if (cached) {
                try {
                    appData = JSON.parse(cached);
                    return true;
                } catch (e) {
                    sessionStorage.removeItem('appData');
                }
            }
            try {
                showDataStatus('Loading...', false, true);
                const response = await fetch(`${API_BASE}/api/data`, { credentials: 'include' });
                if (response.status === 401) {
                    showDataStatus('Session expired - please login again', true);
                    showLogin();
                    return false;
                }
                if (response.ok) {
                    const serverData = await response.json();
                    const defaultData = getDefaultData();
                    appData = {
                        ...defaultData,
                        ...serverData,
                        settings: { ...defaultData.settings, ...(serverData.settings || {}) },
                        expenseCategories: serverData.expenseCategories || defaultData.expenseCategories,
                        recurringExpenses: serverData.recurringExpenses || []
                    };
                    sessionStorage.setItem('appData', JSON.stringify(appData));
                    showDataStatus('Loaded!', false);
                    return true;
                } else {
                    throw new Error('Server error');
                }
            } catch (error) {
                showDataStatus('Load failed - using defaults', true);
                return false;
            }
        }

        async function saveData() { if (!isOnline || !isAuthenticated) { showDataStatus('Cannot save - offline or not authenticated', true); return false; } try { showDataStatus('Saving...', false, true); const response = await fetch(`${API_BASE}/api/data`, { method: 'POST', headers: { 'Content-Type': 'application/json', }, credentials: 'include', body: JSON.stringify(appData) }); if (response.status === 401) { showDataStatus('Session expired - please login again', true); showLogin(); return false; } if (response.ok) { showDataStatus('Saved!', false); return true; } else { throw new Error('Server error'); } } catch (error) { showDataStatus('Save failed', true); return false; } }
        async function loadData() { if (!isAuthenticated) return false; try { showDataStatus('Loading...', false, true); const response = await fetch(`${API_BASE}/api/data`, { credentials: 'include' }); if (response.status === 401) { showDataStatus('Session expired - please login again', true); showLogin(); return false; } if (response.ok) { const serverData = await response.json(); const defaultData = getDefaultData(); appData = { ...defaultData, ...serverData, settings: { ...defaultData.settings, ...(serverData.settings || {}) }, expenseCategories: serverData.expenseCategories || defaultData.expenseCategories, recurringExpenses: serverData.recurringExpenses || [] }; showDataStatus('Loaded!', false); return true; } else { throw new Error('Server error'); } } catch (error) { showDataStatus('Load failed - using defaults', true); return false; } }

        function showDataStatus(message, isError = false, isLoading = false) {
            const statusElement = document.getElementById('data-status');
            statusElement.innerHTML = message;
            statusElement.className = `data-status show ${isError ? 'error' : ''} ${isLoading ? 'loading' : ''}`;
            setTimeout(() => { statusElement.className = 'data-status'; }, isLoading ? 5000 : 2000);
        }

        function updateSyncIndicator() {
            const indicator = document.getElementById('sync-indicator');
            if (indicator) {
                indicator.textContent = isOnline ? '✅ Connected' : '❌ Offline';
            }
        }

        // --- Custom Popup Functions ---
        function ensurePopup() {
            if (document.getElementById('popup-overlay')) return;
            const style = document.createElement('style');
            style.textContent = `
                #popup-overlay { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; background: rgba(0,0,0,0.5); z-index: 3000; }
                #popup-overlay.show { display: flex; }
                #popup-box { background: var(--card-background, #fff); padding: 1rem; border-radius: var(--border-radius-small, 8px); box-shadow: 0 2px 8px rgba(0,0,0,0.3); max-width: 320px; width: 90%; }
                #popup-buttons { margin-top: 1rem; display: flex; justify-content: flex-end; gap: 0.5rem; }
            `;
            document.head.appendChild(style);
            const overlay = document.createElement('div');
            overlay.id = 'popup-overlay';
            overlay.innerHTML = `
                <div id="popup-box">
                    <div id="popup-message"></div>
                    <div id="popup-buttons">
                        <button id="popup-ok" class="btn btn-primary">OK</button>
                        <button id="popup-cancel" class="btn btn-secondary">Cancel</button>
                    </div>
                </div>`;
            document.body.appendChild(overlay);
        }

        function customAlert(message) {
            ensurePopup();
            return new Promise(resolve => {
                const overlay = document.getElementById('popup-overlay');
                const msg = document.getElementById('popup-message');
                const ok = document.getElementById('popup-ok');
                const cancel = document.getElementById('popup-cancel');
                cancel.style.display = 'none';
                msg.textContent = message;
                overlay.classList.add('show');
                const close = () => {
                    overlay.classList.remove('show');
                    ok.removeEventListener('click', close);
                    resolve();
                };
                ok.addEventListener('click', close);
            });
        }

        function customConfirm(message) {
            ensurePopup();
            return new Promise(resolve => {
                const overlay = document.getElementById('popup-overlay');
                const msg = document.getElementById('popup-message');
                const ok = document.getElementById('popup-ok');
                const cancel = document.getElementById('popup-cancel');
                cancel.style.display = 'inline-block';
                msg.textContent = message;
                overlay.classList.add('show');
                const cleanup = result => {
                    overlay.classList.remove('show');
                    ok.removeEventListener('click', onOk);
                    cancel.removeEventListener('click', onCancel);
                    resolve(result);
                };
                const onOk = () => cleanup(true);
                const onCancel = () => cleanup(false);
                ok.addEventListener('click', onOk);
                cancel.addEventListener('click', onCancel);
            });
        }

        // --- Helper Functions ---
        function getCategoryById(id) { return appData.expenseCategories.find(c => c.id === id) || appData.expenseCategories.find(c => c.id === 'other'); }
        const incomeTypeLabels = { paycheck: 'Paycheck', tips_pay_period: 'Tips for Pay Period', tips_daily: 'Daily Tips' };
        function getIncomeTypeLabel(type) { return incomeTypeLabels[type] || type.replace(/_/g, ' '); }
        function getCurrentDate() { const today = new Date(); const year = today.getFullYear(); const month = String(today.getMonth() + 1).padStart(2, '0'); const day = String(today.getDate()).padStart(2, '0'); return `${year}-${month}-${day}`; }
        function parseLocalDate(dateString) { if(!dateString) return new Date(); const [year, month, day] = dateString.split('-').map(Number); return new Date(year, month - 1, day); }
        function formatTime12h(time24) { if (!time24) return ''; const [hours, minutes] = time24.split(':'); const hour = parseInt(hours); const ampm = hour >= 12 ? 'pm' : 'am'; const hour12 = hour % 12 || 12; return `${hour12}:${minutes}${ampm}`; }
        function calculateEventHours(startTime, endTime, type) { if (type === 'vacation' || type === 'sick') return 8; if (!startTime || !endTime) return 0; const start = new Date(`2000-01-01T${startTime}`); const end = new Date(`2000-01-01T${endTime}`); return (end - start) / 3600000; }
        function getEventsForDate(date) { if (!date) return []; const dateStr = date.toISOString().split('T')[0]; const events = []; appData.income.filter(i => i.date === dateStr).forEach(i => events.push({ type: 'income', data: i, color: 'event-income', display: `$${i.amount.toFixed(0)}` })); appData.workShifts.filter(s => s.date === dateStr).forEach(s => { const colors = { work: 'event-work', vacation: 'event-vacation', sick: 'event-sick' }; const display = { work: s.startTime && s.endTime ? `${formatTime12h(s.startTime)}-${formatTime12h(s.endTime)}` : 'Work', vacation: 'Vacation', sick: 'Sick Day' }; events.push({ type: 'event', data: s, color: colors[s.type] || colors.work, display: display[s.type] || 'Event' }); }); return events; }
        function getNextPayPeriod() { const lastPayDate = parseLocalDate(appData.settings.lastPayDate); const today = new Date(); today.setHours(0, 0, 0, 0); let daysInPeriod = appData.settings.paySchedule === 'weekly' ? 7 : appData.settings.paySchedule === 'monthly' ? 30 : 14; let nextPayDate = new Date(lastPayDate.getTime()); while (nextPayDate <= today) { nextPayDate.setDate(nextPayDate.getDate() + daysInPeriod); } const periodStart = new Date(nextPayDate.getTime()); periodStart.setDate(periodStart.getDate() - daysInPeriod); const periodEnd = new Date(nextPayDate.getTime()); periodEnd.setDate(periodEnd.getDate() - 1); return { start: periodStart, end: periodEnd, nextPayDate: nextPayDate, daysInPeriod: daysInPeriod }; }
        function getEstimatedPayForPeriod(startDate, endDate) { const shiftsInPeriod = appData.workShifts.filter(s => { const d = new Date(s.date); return d >= startDate && d <= endDate && s.type === 'work'; }); const totalHours = shiftsInPeriod.reduce((sum, s) => sum + (s.hours || 0), 0); const gross = totalHours * appData.settings.hourlyRate; const taxes = gross * appData.settings.taxRate; return { hours: totalHours, gross, taxes, net: gross - taxes, shifts: shiftsInPeriod.length }; }
        function getCurrentPayPeriodEstimate() { const period = getNextPayPeriod(); const estimate = getEstimatedPayForPeriod(period.start, period.end); return { ...estimate, period, periodType: appData.settings.paySchedule }; }
        function getDaysInMonth(date) { const year = date.getFullYear(); const month = date.getMonth(); const firstDay = new Date(year, month, 1); const lastDay = new Date(year, month + 1, 0); const daysInMonth = lastDay.getDate(); const startingDayOfWeek = firstDay.getDay(); const days = []; for (let i = 0; i < startingDayOfWeek; i++) { days.push(null); } for (let day = 1; day <= daysInMonth; day++) { days.push(new Date(year, month, day)); } return days; }
        function isToday(date) { if (!date) return false; return date.toDateString() === new Date().toDateString(); }
        function isJapanDate(date) { if (!date) return false; return date.toDateString() === new Date(appData.targetDate).toDateString(); }
        function areDatesEqual(d1, d2) { return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate(); }

        // --- Render Functions ---
        function renderView() { try { const appContent = document.getElementById('app-content'); if (!appContent) { return; } let content = ''; switch(currentView) { case 'dashboard': content = renderDashboard(); break; case 'income': content = renderIncome(); break; case 'expenses': content = renderExpenses(); break; case 'calendar': content = renderCalendar(); break; case 'analytics': content = renderAnalytics(); break; case 'suggestions': content = renderSuggestions(); break; case 'settings': content = renderSettings(); break; default: content = renderDashboard(); } appContent.innerHTML = content; if (currentView === 'income') { setTimeout(() => toggleIncomeFormFields(), 0); } if (currentView === 'dashboard') { setTimeout(() => renderDashboardCharts(), 50); } if(currentView === 'analytics'){ setTimeout(() => { renderChart('growth'); renderPeriodComparison(); }, 50); } } catch (error) { const appContent = document.getElementById('app-content'); if (appContent) { appContent.innerHTML = `<div class="card"><h2>Rendering Error</h2><p>Error rendering ${currentView} view.</p><p class="text-gray" style="font-size:0.8rem">${error.message}</p></div>`; } console.error(error); } }
        function renderDashboard() {
            const progress = (appData.currentBalance / appData.goalAmount) * 100;
            const remaining = appData.goalAmount - appData.currentBalance;
            const today = new Date(getCurrentDate());
            const target = new Date(appData.targetDate);
            const daysRemaining = Math.max(0, Math.ceil((target - today) / 3600000 / 24));
            const monthsRemaining = Math.round(daysRemaining / 30.44);
            const monthlyNeeded = remaining > 0 ? remaining / Math.max(monthsRemaining, 1) : 0;
            const biWeeklyEstimate = getCurrentPayPeriodEstimate();
            const payPeriodTitle = biWeeklyEstimate.periodType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

            return `<div class="space-y-6">
                <div class="card stagger-in">
                    <div style="animation-delay: 0ms;">
                        <h2>Japan Fund</h2>
                        <div class="flex justify-between" style="font-size: 0.875rem; color: var(--text-color-secondary); margin-bottom: 0.5rem;">
                            <span>$${appData.currentBalance.toLocaleString()}</span>
                            <span>$${appData.goalAmount.toLocaleString()}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
                        </div>
                        <div class="text-center" style="margin-top: 1rem; font-size: 1.125rem; font-weight: 600;">${progress.toFixed(1)}% Complete</div>
                    </div>
                </div>
                <div class="grid-2">
                    <div class="card stagger-in" style="animation-delay: 100ms;">
                        <h3>Recent Progress (30d)</h3>
                        <div style="height: 150px;" id="dashboard-growth-container"><canvas id="dashboardGrowthChart"></canvas></div>
                    </div>
                    <div class="card stagger-in" style="animation-delay: 150ms;">
                        <h3>Spending This Month</h3>
                        <div style="height: 150px;" id="dashboard-expense-container"><canvas id="dashboardExpenseChart"></canvas></div>
                    </div>
                </div>
                <div class="card stagger-in" style="background-color: var(--background-color-light); animation-delay: 200ms;">
                    <h3>Est. Pay This ${payPeriodTitle}</h3>
                    <div class="stats-grid">
                        <div class="stat-card"><div class="stat-number" style="color: var(--primary-color);">${biWeeklyEstimate.hours.toFixed(1)}h</div><div class="stat-label">Scheduled</div></div>
                        <div class="stat-card"><div class="stat-number" style="color: var(--success-color);">$${biWeeklyEstimate.gross.toFixed(0)}</div><div class="stat-label">Gross</div></div>
                        <div class="stat-card"><div class="stat-number" style="color: var(--danger-color);">$${biWeeklyEstimate.taxes.toFixed(0)}</div><div class="stat-label">Taxes</div></div>
                        <div class="stat-card"><div class="stat-number" style="color: var(--warning-color);">$${biWeeklyEstimate.net.toFixed(0)}</div><div class="stat-label">Net</div></div>
                    </div>
                    <div class="text-sm text-gray text-center" style="margin-top: 1rem;">Pay period: ${biWeeklyEstimate.period.start.toLocaleDateString()} - ${biWeeklyEstimate.period.end.toLocaleDateString()}</div>
                </div>
                <div class="card stagger-in" style="animation-delay: 300ms;">
                    <div class="stats-grid">
                        <div class="stat-card"><div class="stat-number">$${remaining > 0 ? remaining.toLocaleString() : '0'}</div><div class="stat-label">Remaining</div></div>
                        <div class="stat-card"><div class="stat-number">${monthsRemaining}</div><div class="stat-label">Months Left</div></div>
                        <div class="stat-card"><div class="stat-number">$${monthlyNeeded.toFixed(0)}</div><div class="stat-label">Need/Month</div></div>
                    </div>
                </div>
            </div>`;
        }
        function renderDashboardCharts() {
            if (dashboardGrowthChart) dashboardGrowthChart.destroy();
            if (dashboardExpenseChart) dashboardExpenseChart.destroy();

            const growthContainer = document.getElementById('dashboard-growth-container');
            if (growthContainer) {
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                const recentTransactions = [...appData.income, ...appData.expenses].filter(t => parseLocalDate(t.date) >= thirtyDaysAgo).sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date));
                if (recentTransactions.length > 1) {
                    growthContainer.innerHTML = '<canvas id="dashboardGrowthChart"></canvas>';
                    const growthCtx = document.getElementById('dashboardGrowthChart').getContext('2d');
                    const netSavingsLast30Days = recentTransactions.reduce((acc, t) => acc + (t.hasOwnProperty('taxes') ? t.amount : -t.amount), 0);
                    const startingBalance = appData.currentBalance - netSavingsLast30Days;
                    const growthData = recentTransactions.reduce((acc, t) => {
                        const last = acc.length ? acc[acc.length - 1].balance : startingBalance;
                        const newBalance = last + (t.hasOwnProperty('taxes') ? t.amount : -t.amount);
                        acc.push({ date: t.date, balance: newBalance });
                        return acc;
                    }, []);
                    dashboardGrowthChart = new Chart(growthCtx, { type: 'line', data: { labels: growthData.map(d => new Date(d.date).toLocaleDateString('en-us', {month:'short', day:'numeric'})), datasets: [{ label: 'Fund Balance', data: growthData.map(d => d.balance), borderColor: 'var(--primary-color)', backgroundColor: 'rgba(0, 122, 255, 0.1)', fill: true, tension: 0.4, pointRadius: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { display: false } } } });
                } else {
                    growthContainer.innerHTML = `<div class="chart-fallback">Not enough data for 30-day trend.</div>`;
                }
            }

            const expenseContainer = document.getElementById('dashboard-expense-container');
            if(expenseContainer) {
                const currentMonth = getCurrentDate().slice(0, 7);
                const monthlyExpenses = appData.expenses.filter(e => e.date.startsWith(currentMonth));
                const spendingByCategory = {};
                monthlyExpenses.forEach(e => { spendingByCategory[e.category] = (spendingByCategory[e.category] || 0) + e.amount; });
                const expenseLabels = Object.keys(spendingByCategory);
                if(expenseLabels.length > 0) {
                    expenseContainer.innerHTML = '<canvas id="dashboardExpenseChart"></canvas>';
                    const expenseCtx = document.getElementById('dashboardExpenseChart').getContext('2d');
                    dashboardExpenseChart = new Chart(expenseCtx, { type: 'doughnut', data: { labels: expenseLabels.map(l => getCategoryById(l).name), datasets: [{ label: 'Monthly Expenses', data: Object.values(spendingByCategory), backgroundColor: expenseLabels.map(l => getCategoryById(l).color), borderWidth: 2, borderColor: 'var(--card-background)' }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '60%', plugins: { legend: { display: false } } } });
                } else {
                    expenseContainer.innerHTML = `<div class="chart-fallback">No expenses this month.</div>`;
                }
            }
        }
        function renderIncome() {
            const totalNetIncome = appData.income.reduce((s, i) => s + i.amount, 0);
            const totalHours = appData.income.reduce((s, i) => s + i.hours, 0);
            const totalTaxes = appData.income.reduce((s, i) => s + (i.taxes || 0), 0);
            const totalGrossIncome = totalNetIncome + totalTaxes;
            const avgGrossRate = totalHours > 0 ? totalGrossIncome / totalHours : 0;
            const paycheckIncome = appData.income.filter(i => i.type === 'paycheck' && i.taxes && i.taxes > 0);
            const paycheckNetTotal = paycheckIncome.reduce((s, i) => s + i.amount, 0);
            const paycheckTaxesTotal = paycheckIncome.reduce((s, i) => s + i.taxes, 0);
            const paycheckGrossTotal = paycheckNetTotal + paycheckTaxesTotal;
            const effectiveTaxRate = paycheckGrossTotal > 0 ? (paycheckTaxesTotal / paycheckGrossTotal) * 100 : 0;
            let displayedIncome = [...appData.income].sort((a,b) => parseLocalDate(b.date) - parseLocalDate(a.date));
            if (!showAllIncomeHistory) {
                const threeDaysAgo = new Date();
                threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
                threeDaysAgo.setHours(0,0,0,0);
                displayedIncome = displayedIncome.filter(inc => parseLocalDate(inc.date) >= threeDaysAgo);
            }

            return `<div class="space-y-6">
                <div class="card">
                    <h2>${editingIncome ? 'Edit Income' : 'Income Tracking'}</h2>
                    <div class="space-y-3">
                        <div class="form-row"><div class="form-group"><label class="form-label">Type</label><select id="income-type" class="form-select" onchange="toggleIncomeFormFields()"><option value="paycheck">Paycheck</option><option value="tips_pay_period">Tips for Pay Period</option><option value="tips_daily">Daily Tips</option></select></div><div class="form-group"><label id="income-amount-label" class="form-label">Net Amount ($)</label><input type="number" step="0.01" id="income-amount" class="form-input" placeholder="248.50"></div></div>
                        <div class="form-row"><div class="form-group" id="income-hours-group"><label class="form-label">Hours</label><input type="number" step="0.1" id="income-hours" class="form-input" placeholder="22.5"></div><div class="form-group" id="income-taxes-group"><label class="form-label">Taxes Paid ($)</label><input type="number" step="0.01" id="income-taxes" class="form-input" placeholder="54.67"></div><div class="form-group"><label class="form-label">Date</label><input type="date" id="income-date" class="form-input" value="${getCurrentDate()}"></div></div>
                        <div class="flex gap-4">${editingIncome ? `<button onclick="updateIncome()" class="btn btn-success" style="flex: 1;">Update Income</button><button onclick="cancelEditIncome()" class="btn btn-secondary" style="flex: 1;">Cancel</button>` : `<button onclick="addIncome()" class="btn btn-primary" style="flex: 1;">Add Income</button>`}</div>
                    </div>
                </div>
                <div class="card"><h3>Stats</h3><div class="stats-grid"><div class="stat-card"><div class="stat-number" style="color:var(--primary-color)">$${totalGrossIncome.toFixed(0)}</div><div class="stat-label">Gross Income</div></div><div class="stat-card"><div class="stat-number" style="color:var(--danger-color)">$${totalTaxes.toFixed(0)}</div><div class="stat-label">Taxes Paid</div></div><div class="stat-card"><div class="stat-number" style="color:var(--success-color)">$${totalNetIncome.toFixed(0)}</div><div class="stat-label">Net Income</div></div><div class="stat-card"><div class="stat-number" style="color:var(--warning-color)">$${avgGrossRate.toFixed(2)}</div><div class="stat-label">Avg Gross Rate</div></div><div class="stat-card"><div class="stat-number" style="color:var(--danger-color)">${effectiveTaxRate.toFixed(1)}%</div><div class="stat-label">Effective Tax Rate</div></div></div></div>
                <div class="card">
                    <div class="flex justify-between items-center mb-4"><h3 style="margin:0;">Recent Income</h3>${appData.income.length > 0 ? `<button class="btn btn-secondary btn-small" onclick="toggleIncomeHistory()">${showAllIncomeHistory ? 'Show Recent' : 'View Full History'}</button>`: ''}</div>
                    ${displayedIncome.length === 0 ? `<p class="text-gray">${showAllIncomeHistory ? 'No income logged yet.' : 'No income in the last 3 days.'}</p>` : `<div class="space-y-3 stagger-in">${displayedIncome.map((income, i) => { const displayAmount = `$${income.amount.toFixed(2)}`; const detailLine = income.type === 'paycheck' ? `${income.hours}h • $${((income.amount + (income.taxes || 0)) / (income.hours || 1)).toFixed(2)}/hr gross • ${new Date(income.date).toLocaleDateString()}` : `Tips • ${new Date(income.date).toLocaleDateString()}`; return `<div class="flex items-center justify-between" style="padding: 0.75rem; border-radius: var(--border-radius-medium); background-color: var(--background-color-light); animation-delay: ${i * 50}ms;"><div style="flex: 1;"><div style="font-weight: 500;">${getIncomeTypeLabel(income.type)} - ${displayAmount}</div><div class="text-sm text-gray">${detailLine}</div></div><div class="flex gap-2"><button onclick="startEditIncome(${income.id})" class="btn btn-small btn-secondary">Edit</button><button onclick="deleteIncome(${income.id})" class="btn btn-small btn-danger">Delete</button></div></div>`; }).join('')}</div>`}
                </div>
            </div>`;
        }
        function renderExpenses() {
            const currentMonth = getCurrentDate().slice(0, 7); const monthlyExpenses = appData.expenses.filter(e => e.date.startsWith(currentMonth)); const totalSpentThisMonth = monthlyExpenses.reduce((s, e) => s + e.amount, 0); const spendingByCategory = {}; if (totalSpentThisMonth > 0) { appData.expenseCategories.forEach(c => { const spent = monthlyExpenses.filter(e => e.category === c.id).reduce((s, e) => s + e.amount, 0); if (spent > 0) spendingByCategory[c.id] = spent; }); }
            const sortedSpending = Object.entries(spendingByCategory).sort(([, a], [, b]) => b - a); let pieChartHtml = `<div class="text-center" style="padding: 2rem; color: var(--text-color-secondary);"><p>No expenses logged for this month yet. Add one below!</p></div>`; if (totalSpentThisMonth > 0) { let gradientString = sortedSpending.reduce((acc, [key, amount]) => { const p = (amount / totalSpentThisMonth) * 100; const cat = getCategoryById(key); const start = acc.cumulative; const end = start + p; acc.str += `${cat.color} ${start}% ${end}%, `; acc.cumulative = end; return acc; }, { str: '', cumulative: 0 }).str.slice(0, -2); const legendHtml = sortedSpending.map(([key, amount]) => { const p = (amount / totalSpentThisMonth) * 100; const cat = getCategoryById(key); return `<div class="flex items-center justify-between py-2"><div class="flex items-center gap-4"><div style="width: 12px; height: 12px; border-radius: 50%; background-color: ${cat.color};"></div><span class="font-medium">${cat.name}</span></div><div class="text-right"><div class="font-semibold">$${amount.toFixed(2)}</div><div style="font-size: 0.8rem; color: var(--text-color-secondary);">${p.toFixed(1)}%</div></div></div>`; }).join(''); pieChartHtml = `<div class="grid md:grid-cols-2 gap-6 items-center"><div style="position: relative; width: 200px; height: 200px; margin: 0 auto;"><div style="width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(${gradientString});"></div><div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--card-background); width: 65%; height: 65%; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;"><div style="font-size: 1.75rem; font-weight: 700;">$${totalSpentThisMonth.toFixed(0)}</div><div class="text-sm" style="color: var(--text-color-secondary);">Total</div></div></div><div>${legendHtml}</div></div>`; }
            const recentExpenses = appData.expenses.slice(-10).reverse(); 
            const recurringExpenseForm = `<div class="card" id="recurring-expense-form" style="display:none"><h3>${editingRecurringExpense ? 'Edit' : 'Add'} Recurring Bill</h3><div class="space-y-3"><div class="form-row"><div class="form-group"><label class="form-label">Category</label><select id="recurring-expense-category" class="form-select">${appData.expenseCategories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div><div class="form-group"><label class="form-label">Frequency</label><select id="recurring-expense-frequency" class="form-select"><option value="weekly">Weekly</option><option value="bi-weekly">Bi-weekly</option><option value="monthly">Monthly</option></select></div></div><div class="form-row"><div class="form-group"><label class="form-label">Amount ($)</label><input type="number" step="0.01" id="recurring-expense-amount" class="form-input" placeholder="29.99"></div><div class="form-group"><label class="form-label">Description</label><input type="text" id="recurring-expense-description" class="form-input" placeholder="Netflix Subscription"></div></div><div class="flex gap-4">${editingRecurringExpense ? `<button onclick="updateRecurringExpense()" class="btn btn-success" style="flex:1">Update</button><button onclick="cancelEditRecurringExpense()" class="btn btn-secondary" style="flex:1">Cancel</button>` : `<button onclick="addRecurringExpense()" class="btn btn-primary" style="flex:1">Add Bill</button><button onclick="toggleRecurringExpenseForm(false)" class="btn btn-secondary" style="flex:1">Cancel</button>`}</div></div></div>`;
            return `<div class="space-y-6"><div class="card"><h2>💸 Spending This Month</h2>${pieChartHtml}</div><div class="card"><h3>${editingExpense ? 'Edit Expense' : 'Add New Expense'}</h3><div class="space-y-3"><div class="form-row"><div class="form-group"><label class="form-label">Category</label><select id="expense-category" class="form-select">${appData.expenseCategories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div><div class="form-group"><label class="form-label">Amount ($)</label><input type="number" step="0.01" id="expense-amount" class="form-input" placeholder="12.99"></div><div class="form-group"><label class="form-label">Date</label><input type="date" id="expense-date" class="form-input" value="${getCurrentDate()}"></div></div><div class="form-group"><label class="form-label">Description</label><input type="text" id="expense-description" class="form-input" placeholder="Lunch with friends"></div><div class="flex gap-4">${editingExpense ? `<button onclick="updateExpense()" class="btn btn-primary" style="flex: 1;">Update Expense</button><button onclick="cancelEditExpense()" class="btn btn-secondary" style="flex: 1;">Cancel</button>` : `<button onclick="addExpense()" class="btn btn-primary" style="flex: 1;">Add Expense</button>`}</div></div></div>
            <div class="card">
                <div class="flex justify-between items-center mb-4"><h3 style="margin:0;">🔁 Recurring Bills</h3><button class="btn btn-secondary btn-small" onclick="toggleRecurringExpenseForm(true)">Add New Bill</button></div>
                ${recurringExpenseForm}
                ${appData.recurringExpenses.length === 0 ? `<p class="text-gray">No recurring bills set up yet.</p>` : `<div class="space-y-3">${appData.recurringExpenses.map(bill => { const cat = getCategoryById(bill.category); return `<div class="flex items-center justify-between" style="padding:0.75rem; border-radius:var(--border-radius-medium); background-color:var(--background-color-light);"><div class="flex items-center gap-4"><div style="color: ${cat.color};">${cat.icon}</div><div><div style="font-weight:500;">${bill.description}</div><div class="text-sm text-gray">$${bill.amount.toFixed(2)} / ${bill.frequency.replace('-',' ')} • Next: ${new Date(bill.nextDueDate).toLocaleDateString()}</div></div></div><div class="flex gap-2"><button onclick="startEditRecurringExpense('${bill.id}')" class="btn btn-small btn-secondary">Edit</button><button onclick="deleteRecurringExpense('${bill.id}')" class="btn btn-small btn-danger">Delete</button></div></div>`; }).join('')}</div>`}
            </div>
            <div class="card"><h3>🧾 Recent Expenses</h3>${recentExpenses.length === 0 ? `<p class="text-gray">No expenses logged yet</p>` : `<div class="space-y-3 stagger-in">${recentExpenses.map((expense, i) => { const cat = getCategoryById(expense.category); return `<div class="flex items-center justify-between" style="padding: 0.75rem; border-radius: var(--border-radius-medium); background-color:var(--background-color-light); animation-delay: ${i * 50}ms;"><div class="flex items-center gap-4" style="flex: 1;"><div style="color: ${cat.color}; background-color: ${cat.color}20; padding: 0.5rem; border-radius: var(--border-radius-small); display:flex; align-items:center;">${cat.icon}</div><div><div style="font-weight: 500;">${expense.description}</div><div class="text-sm" style="color: var(--text-color-secondary);">${cat.name} • ${new Date(expense.date).toLocaleDateString()}</div></div></div><div class="flex items-center gap-4"><div style="font-weight: 600; font-size: 1.125rem; color: var(--danger-color);">-
$${expense.amount.toFixed(2)}</div><div class="flex gap-2"><button onclick="startEditExpense(${expense.id})" class="btn btn-small btn-secondary">Edit</button><button onclick="deleteExpense(${expense.id})" class="btn btn-small btn-danger">Delete</button></div></div></div>`; }).join('')}</div>`}</div></div>`;
        }
        function renderCalendar() {
            const addEventForm = `<div class="card" style="background-color: var(--background-color-light); margin-bottom: 1.5rem;"><h3 style="margin-bottom:1.5rem">${editingEvent ? 'Edit Event' : 'Add Event'}</h3><div class="space-y-3"><div class="form-row"><div class="form-group"><label class="form-label">Date</label><input type="date" id="event-date" value="${eventData.date}" class="form-input"></div><div class="form-group"><label class="form-label">Type</label><select id="event-type" class="form-select" onchange="toggleTimeInputs()"><option value="work" ${eventData.type === 'work' ? 'selected' : ''}>Work Shift</option><option value="vacation" ${eventData.type === 'vacation' ? 'selected' : ''}>Vacation</option><option value="sick" ${eventData.type === 'sick' ? 'selected' : ''}>Sick Day</option></select></div></div><div id="work-time-inputs" class="form-row"><div class="form-group"><label class="form-label">Start Time</label><input type="time" id="event-start-time" value="${eventData.startTime}" class="form-input"></div><div class="form-group"><label class="form-label">End Time</label><input type="time" id="event-end-time" value="${eventData.endTime}" class="form-input"></div></div><div id="vacation-period-inputs" style="display: ${(eventData.type === 'vacation' || eventData.type === 'sick') ? 'block' : 'none'}"><div class="form-group"><label class="form-label">End Date (Optional)</label><input type="date" id="event-end-date" value="${eventData.endDate}" class="form-input" min="${eventData.date}"></div></div><div class="flex gap-2"><button onclick="saveEvent()" class="btn btn-primary" style="flex: 1;">${editingEvent ? 'Update Event' : 'Add Event'}</button><button onclick="cancelEventForm()" class="btn btn-secondary">Cancel</button></div></div></div>`;
            
            let calendarContent = '';
            if (currentCalendarView === 'month') calendarContent = renderMonthView();
            else if (currentCalendarView === 'week') calendarContent = renderWeekView();
            else if (currentCalendarView === 'agenda') calendarContent = renderAgendaView();

            return `<div class="card">${showAddEvent ? addEventForm : `<div class="flex justify-between items-center mb-4"><h2 style="margin:0">Calendar</h2><button class="btn btn-primary" onclick="toggleAddEventForm()">Add Event</button></div>`}
            <div class="view-switcher mb-4">
                <button class="btn ${currentCalendarView === 'month' ? 'active' : ''}" onclick="setCalendarView('month')">Month</button>
                <button class="btn ${currentCalendarView === 'week' ? 'active' : ''}" onclick="setCalendarView('week')">Week</button>
                <button class="btn ${currentCalendarView === 'agenda' ? 'active' : ''}" onclick="setCalendarView('agenda')">Agenda</button>
            </div>
            ${calendarContent}
            </div>`;
        }
        function setCalendarView(view) { currentCalendarView = view; currentCalendarDate = new Date(); renderView(); }
        function renderMonthView() {
            const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; 
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
            const daysOfMonth = getDaysInMonth(currentCalendarDate); 
            const selDateObj = new Date(selectedDate);
            return `
            <div class="calendar-header-controls"><button class="btn btn-secondary" onclick="navigateMonth(-1)">←</button><h3 style="margin:0">${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}</h3><button class="btn btn-secondary" onclick="navigateMonth(1)">→</button></div>
            <div class="desktop-calendar" style="margin-top:1rem"><div class="calendar-days-header">${dayNames.map(day => `<div>${day}</div>`).join('')}</div><div class="calendar-grid">${daysOfMonth.map(date => { if (!date) return '<div></div>'; const events = getEventsForDate(date); let classes = 'calendar-day'; if (isToday(date)) classes += ' today'; if (areDatesEqual(date, selDateObj)) classes += ' selected'; return `<div class="${classes}" onclick="selectDate('${date.toISOString()}')" ondblclick="handleDayDblClick('${date.toISOString()}')"><div class="day-number">${date.getDate()}</div><div class="day-events">${events.slice(0, 2).map(e => `<div class="event-badge ${e.color}">${e.display}</div>`).join('')}${events.length > 2 ? `<div class="text-sm text-gray">+${events.length - 2}</div>` : ''}</div></div>`; }).join('')}</div></div>
            ${renderDayDetails(selDateObj)}`;
        }
        function renderWeekView() {
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const startOfWeek = new Date(currentCalendarDate);
            startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(endOfWeek.getDate() + 6);
            let weekDays = [];
            for (let i = 0; i < 7; i++) {
                const day = new Date(startOfWeek);
                day.setDate(day.getDate() + i);
                weekDays.push(day);
            }
            const weekHtml = weekDays.map(day => {
                const events = getEventsForDate(day);
                return `<div class="calendar-week-day">
                    <h4>${dayNames[day.getDay()]} ${day.getDate()}</h4>
                    <div class="day-events">
                        ${events.length === 0 ? `<div class="text-sm text-center text-gray pt-4">No events</div>` : events.map(e => `<div class="event-badge ${e.color}" style="margin-bottom: 4px;">${e.display}</div>`).join('')}
                    </div>
                </div>`;
            }).join('');

            return `
            <div class="calendar-header-controls"><button class="btn btn-secondary" onclick="navigateWeek(-1)">←</button><h3 style="margin:0">${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}</h3><button class="btn btn-secondary" onclick="navigateWeek(1)">→</button></div>
            <div class="calendar-week-grid mt-4">${weekHtml}</div>`;
        }
        function renderAgendaView() {
            const today = new Date();
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + 60);
            const allFutureEvents = [...appData.workShifts, ...appData.income]
                .map(e => ({...e, parsedDate: parseLocalDate(e.date)}))
                .filter(e => e.parsedDate >= today && e.parsedDate <= futureDate)
                .sort((a,b) => a.parsedDate - b.parsedDate);
            
            let lastDate = '';
            if (allFutureEvents.length === 0) return `<div class="text-center text-gray p-4">No upcoming events in the next 60 days.</div>`;
            
            const agendaHtml = allFutureEvents.map(event => {
                let dayHeader = '';
                const eventDateStr = event.parsedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                if(eventDateStr !== lastDate) {
                    dayHeader = `<h4>${eventDateStr}</h4>`;
                    lastDate = eventDateStr;
                }
                const isIncome = event.hasOwnProperty('taxes');
                const cat = isIncome ? null : getCategoryById(event.category);
                const display = isIncome ? `$${event.amount.toFixed(2)} (${getIncomeTypeLabel(event.type)})` : event.startTime ? `${formatTime12h(event.startTime)} - ${formatTime12h(event.endTime)}` : event.type;
                const colorClass = isIncome ? 'event-income' : `event-${event.type || 'work'}`;

                return `<div class="agenda-day">${dayHeader}<div class="event-badge ${colorClass}">${display}</div></div>`;
            }).join('');
            
            return `<div class="agenda-view">${agendaHtml}</div>`;
        }
        function renderDayDetails(date) {
            const events = getEventsForDate(date); if (events.length === 0) return '';
            return `<div style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;"><h3 style="margin-bottom: 1rem;">Events for ${date.toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</h3><div class="space-y-3">${events.map(event => `<div style="background-color:var(--background-color-light); padding: 0.75rem; border-radius: var(--border-radius-medium);" class="flex justify-between items-center"><div><div style="font-weight: 500;">${event.type === 'income' ? `Income: $${event.data.amount.toFixed(2)}` : event.display}</div><div class="text-sm text-gray">${event.type === 'income' ? getIncomeTypeLabel(event.data.type) : `${calculateEventHours(event.data.startTime, event.data.endTime, event.data.type)}h`}</div></div>${event.type === 'event' ? `<div class="flex gap-2"><button onclick="editEvent(${event.data.id})" class="btn btn-small btn-secondary">Edit</button><button onclick="deleteEvent(${event.data.id})" class="btn btn-small btn-danger">Delete</button></div>` : ''}</div>`).join('')}</div></div>`;
        }
        function renderAnalytics() {
            const allTransactions = [ ...appData.income.map(i => ({ date: i.date, type: 'income', amount: i.amount, taxes: i.taxes || 0, hours: i.hours || 0 })), ...appData.expenses.map(e => ({ date: e.date, type: 'expense', category: e.category, amount: e.amount })) ].sort((a, b) => parseLocalDate(a.date) - parseLocalDate(b.date)); if (allTransactions.length === 0) { return `<div class="card text-center"><p>Not enough data for analytics.</p></div>`; }
            const monthlyAggregates = {}; const cumulativeExpenseByCategory = {}; const processDate = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            allTransactions.forEach(t => { const monthKey = processDate(parseLocalDate(t.date)); if (!monthlyAggregates[monthKey]) monthlyAggregates[monthKey] = { gross: 0, net: 0, taxes: 0, hours: 0, expenses: 0 }; if (t.type === 'income') { monthlyAggregates[monthKey].net += t.amount; monthlyAggregates[monthKey].taxes += t.taxes; monthlyAggregates[monthKey].gross += t.amount + t.taxes; monthlyAggregates[monthKey].hours += t.hours; } else { monthlyAggregates[monthKey].expenses += t.amount; cumulativeExpenseByCategory[t.category] = (cumulativeExpenseByCategory[t.category] || 0) + t.amount; } });
            const sortedMonths = Object.keys(monthlyAggregates).sort(); const monthlyChartData = { labels: sortedMonths.map(m => new Date(m + '-02').toLocaleString('default', { month: 'short', year: '2-digit' })), gross: sortedMonths.map(m => monthlyAggregates[m].gross), net: sortedMonths.map(m => monthlyAggregates[m].net), taxes: sortedMonths.map(m => monthlyAggregates[m].taxes), expenses: sortedMonths.map(m => monthlyAggregates[m].expenses), hours: sortedMonths.map(m => monthlyAggregates[m].hours), savingsRate: sortedMonths.map(m => { const inc = monthlyAggregates[m].net; const exp = monthlyAggregates[m].expenses; return inc > 0 ? ((inc - exp) / inc) * 100 : 0; }), avgHourlyRate: sortedMonths.map(m => { const gross = monthlyAggregates[m].gross; const hours = monthlyAggregates[m].hours; return hours > 0 ? gross / hours : 0; }) }; const cumulativeExpenseDatasets = appData.expenseCategories.map(cat => ({ label: cat.name, data: [], fill: 'stack', borderColor: cat.color, backgroundColor: cat.color + 'B3', tension: 0.2 }));
            let cumulativeSums = {}; sortedMonths.forEach(m => { let monthExpenses = appData.expenses.filter(e => processDate(parseLocalDate(e.date)) === m); appData.expenseCategories.forEach((cat, i) => { let catSpendInMonth = monthExpenses.filter(e => e.category === cat.id).reduce((s, e) => s + e.amount, 0); cumulativeSums[cat.id] = (cumulativeSums[cat.id] || 0) + catSpendInMonth; cumulativeExpenseDatasets[i].data.push(cumulativeSums[cat.id]); }); });
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; const weeklyData = dayNames.map(() => ({ hours: 0, tips: 0, tipCount: 0 })); appData.workShifts.forEach(s => weeklyData[parseLocalDate(s.date).getDay()].hours += s.hours); appData.income.filter(i => i.type === 'tips_daily').forEach(t => { const d = parseLocalDate(t.date).getDay(); weeklyData[d].tips += t.amount; weeklyData[d].tipCount++; });
            const weeklyChartData = { labels: dayNames, avgTips: weeklyData.map(d => d.tipCount > 0 ? d.tips / d.tipCount : 0) }; const netSavings = appData.income.reduce((s, i) => s + i.amount, 0) - appData.expenses.reduce((s, e) => s + e.amount, 0); const startingBalance = appData.currentBalance - netSavings; const target = parseLocalDate(appData.targetDate); const firstDate = allTransactions.length > 0 ? parseLocalDate(allTransactions[0].date) : new Date(); const totalDaysToGoal = Math.max(1, Math.ceil((target - firstDate) / 86400000)); const idealDailySavings = (appData.goalAmount - startingBalance) / totalDaysToGoal; let currentIdeal = startingBalance; let currentActual = startingBalance; let projectionLabels = []; let idealPath = []; let actualPath = []; let transactionsByDate = {}; allTransactions.forEach(t => { const d = t.date; if (!transactionsByDate[d]) transactionsByDate[d] = 0; transactionsByDate[d] += (t.type === 'income' ? t.amount : -t.amount); }); for (let d = new Date(firstDate); d <= target; d.setDate(d.getDate() + 1)) { let dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; projectionLabels.push(dateKey); currentIdeal += idealDailySavings; idealPath.push(currentIdeal); if (transactionsByDate[dateKey]) currentActual += transactionsByDate[dateKey]; if (d <= new Date()) actualPath.push(currentActual); }
            fullAnalyticsData = { monthly: monthlyChartData, fundGrowth: { labels: allTransactions.map(t => new Date(t.date).toLocaleDateString()), data: allTransactions.reduce((acc, t) => { const last = acc.length ? acc[acc.length-1] : 0; acc.push(last + (t.type === 'income' ? t.amount : -t.amount)); return acc; }, []) }, expenseCategories: { labels: Object.keys(cumulativeExpenseByCategory).map(c => getCategoryById(c).name), data: Object.values(cumulativeExpenseByCategory), colors: Object.keys(cumulativeExpenseByCategory).map(c => getCategoryById(c).color) }, cumulativeExpenses: { labels: monthlyChartData.labels, datasets: cumulativeExpenseDatasets }, weekly: weeklyChartData, projection: { labels: projectionLabels.map(l => new Date(l).toLocaleDateString()), idealPath, actualPath } };
            
            const today = new Date();
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
            const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
            const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1).toISOString().split('T')[0];
            const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).toISOString().split('T')[0];
            
            return `<div class="space-y-6">
                <div class="card">
                    <h3>📊 Visualizations</h3>
                    <div class="graph-btn-container mb-4"><button class="btn btn-small btn-secondary graph-btn active" data-chart="growth" onclick="renderChart('growth')">Growth</button><button class="btn btn-small btn-secondary graph-btn" data-chart="projection" onclick="renderChart('projection')">Projection</button><button class="btn btn-small btn-secondary graph-btn" data-chart="income_vs_expense" onclick="renderChart('income_vs_expense')">In/Ex</button><button class="btn btn-small btn-secondary graph-btn" data-chart="income_breakdown" onclick="renderChart('income_breakdown')">Income</button><button class="btn btn-small btn-secondary graph-btn" data-chart="savings_rate" onclick="renderChart('savings_rate')">Savings</button><button class="btn btn-small btn-secondary graph-btn" data-chart="expense_donut" onclick="renderChart('expense_donut')">Expenses</button><button class="btn btn-small btn-secondary graph-btn" data-chart="cumulative_expense" onclick="renderChart('cumulative_expense')">Spending</button><button class="btn btn-small btn-secondary graph-btn" data-chart="hours_vs_pay" onclick="renderChart('hours_vs_pay')">Hours/Pay</button><button class="btn btn-small btn-secondary graph-btn" data-chart="avg_hourly_rate" onclick="renderChart('avg_hourly_rate')">Rate</button><button class="btn btn-small btn-secondary graph-btn" data-chart="tip_by_day" onclick="renderChart('tip_by_day')">Tips</button></div>
                    <div style="height: 350px;"><canvas id="analyticsChart"></canvas></div>
                </div>
                <div class="card">
                    <h3>⚖️ Period-over-Period Comparison</h3>
                    <div class="grid md:grid-cols-2 gap-4 my-4">
                        <div>
                            <label class="form-label">Period A</label>
                            <div class="flex gap-2">
                                <input type="date" id="compare-a-start" class="form-input" value="${startOfMonth}">
                                <input type="date" id="compare-a-end" class="form-input" value="${endOfMonth}">
                            </div>
                        </div>
                        <div>
                            <label class="form-label">Period B</label>
                            <div class="flex gap-2">
                                <input type="date" id="compare-b-start" class="form-input" value="${startOfLastMonth}">
                                <input type="date" id="compare-b-end" class="form-input" value="${endOfLastMonth}">
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary w-full" onclick="renderPeriodComparison()">Compare</button>
                    <div id="comparison-results" class="mt-4"></div>
                </div>
            </div>`;
        }
        function renderSuggestions() {
            const suggestions = generateSuggestions();
            const suggestionCategories = {
                'Goal Focus': { icon: '🎯', color: 'var(--primary-color)', suggestions: suggestions.filter(s => s.category === 'goal') },
                'Spending': { icon: '💸', color: 'var(--danger-color)', suggestions: suggestions.filter(s => s.category === 'spending') },
                'Earning': { icon: '💰', color: 'var(--warning-color)', suggestions: suggestions.filter(s => s.category === 'earning') },
                'On Track': { icon: '✅', color: 'var(--success-color)', suggestions: suggestions.filter(s => s.category === 'ontrack') }
            };

            if (suggestions.length === 0) {
                return `<div class="card text-center"><h2 class="mb-2">💡 Great Job!</h2><p class="text-gray">We don't have any specific suggestions right now. You seem to be on track. Keep up the great work!</p></div>`;
            }

            let html = `<div class="space-y-6">`;
            for (const [catName, catData] of Object.entries(suggestionCategories)) {
                if (catData.suggestions.length > 0) {
                    html += `<div class="stagger-in">
                        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;"><span style="font-size: 2rem; line-height: 1;">${catData.icon}</span> ${catName}</h2>
                        <div class="space-y-4">${catData.suggestions.map(s => `
                            <div class="card" style="border-left: 4px solid ${catData.color};"><div class="flex items-start gap-4"><div style="flex: 1;"><h3 style="margin: 0;">${s.title}</h3><p class="text-gray my-3">${s.description}</p><div style="background: var(--background-color-dark); padding: 1rem; border-radius: var(--border-radius-medium);"><div style="font-weight: 500; margin-bottom: 0.5rem;">💡 Action Steps:</div><ul style="margin: 0; padding-left: 1.5rem;">${s.actions.map(action => `<li style="margin-bottom: 0.25rem;">${action}</li>`).join('')}</ul></div></div></div></div>`
                        ).join('')}</div>
                    </div>`;
                }
            }
            html += `</div>`;
            return html;
        }
        function renderSettings() {
            const categoryForm = `
                <div id="category-form" style="display: ${editingCategory === 'new' ? 'block' : 'none'}; background-color: var(--background-color-dark); padding: 1rem; border-radius: var(--border-radius-medium); margin-top: 1rem;">
                    <h4>${editingCategory === 'new' ? 'Add New Category' : 'Edit Category'}</h4>
                    <div class="form-row mt-4">
                        <div class="form-group"><label class="form-label">Name</label><input type="text" id="category-name" class="form-input"></div>
                        <div class="form-group"><label class="form-label">Color</label><input type="color" id="category-color" class="form-input" style="padding: 0.25rem; width: 3rem; height: 2.5rem;"></div>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn btn-success" onclick="saveCategory('new')">Save</button>
                        <button class="btn btn-secondary" onclick="cancelEditCategory()">Cancel</button>
                    </div>
                </div>`;

             return `<div class="space-y-6"><div class="card"><h2>Settings</h2><div class="space-y-6">
                <div><h3>Look & Feel</h3><div class="flex justify-between items-center"><label class="form-label" style="margin:0;">Dark Mode</label><button class="btn btn-secondary" onclick="toggleDarkMode()">${appData.settings.darkMode ? 'Disable' : 'Enable'}</button></div></div>
                <div><h3>💼 Work & Pay Settings</h3><div class="space-y-3"><div class="form-row"><div class="form-group"><label class="form-label">Hourly Rate ($)</label><input type="number" step="0.01" id="hourly-rate" value="${appData.settings.hourlyRate}" onchange="updateSetting('hourlyRate', parseFloat(this.value) || 0)" class="form-input"></div><div class="form-group"><label class="form-label">Tax Rate (%)</label><input type="number" step="0.01" id="tax-rate" value="${(appData.settings.taxRate * 100).toFixed(2)}" onchange="updateSetting('taxRate', (parseFloat(this.value) || 0) / 100)" class="form-input"></div></div><div class="form-row"><div class="form-group"><label class="form-label">Pay Schedule</label><select id="pay-schedule" class="form-select" onchange="updateSetting('paySchedule', this.value)"><option value="weekly" ${appData.settings.paySchedule === 'weekly' ? 'selected' : ''}>Weekly</option><option value="bi-weekly" ${appData.settings.paySchedule === 'bi-weekly' ? 'selected' : ''}>Bi-weekly</option><option value="monthly" ${appData.settings.paySchedule === 'monthly' ? 'selected' : ''}>Monthly</option></select></div><div class="form-group"><label class="form-label">Last Pay Date</label><input type="date" id="last-pay-date" value="${appData.settings.lastPayDate}" onchange="updateSetting('lastPayDate', this.value)" class="form-input"></div></div></div></div>
                <div><h3>📊 Expense Categories</h3>
                    <div class="space-y-2">${appData.expenseCategories.map(cat => `
                        <div id="category-item-${cat.id}" class="flex items-center justify-between p-2" style="display: ${editingCategory === cat.id ? 'none' : 'flex'}">
                            <div class="flex items-center gap-3"><div style="width:20px; height:20px; background-color:${cat.color}; border-radius:4px;"></div><span>${cat.name}</span></div>
                            <div class="flex gap-2"><button class="btn btn-small btn-secondary" onclick="startEditCategory('${cat.id}')">Edit</button><button class="btn btn-small btn-danger" onclick="deleteCategory('${cat.id}')">Del</button></div>
                        </div>
                        <div id="category-edit-form-${cat.id}" style="display: ${editingCategory === cat.id ? 'block' : 'none'}; background-color: var(--background-color-dark); padding: 1rem; border-radius: var(--border-radius-medium);">
                            <h4>Edit Category</h4>
                            <div class="form-row mt-4"><div class="form-group"><label class="form-label">Name</label><input type="text" id="category-name-${cat.id}" class="form-input" value="${cat.name}"></div><div class="form-group"><label class="form-label">Color</label><input type="color" id="category-color-${cat.id}" class="form-input" style="padding: 0.25rem; width: 3rem; height: 2.5rem;" value="${cat.color}"></div></div>
                            <div class="flex gap-2"><button class="btn btn-success" onclick="saveCategory('${cat.id}')">Save</button><button class="btn btn-secondary" onclick="cancelEditCategory()">Cancel</button></div>
                        </div>
                    `).join('')}</div>
                    <button class="btn btn-secondary mt-4" onclick="startEditCategory('new')">Add New Category</button>
                    ${categoryForm}
                </div>
                <div><h3>🇯🇵 Japan Fund Settings</h3><div class="form-row"><div class="form-group"><label class="form-label">Goal Amount ($)</label><input type="number" id="goal-amount" value="${appData.goalAmount}" onchange="updateGoalAmount(parseFloat(this.value) || 40000)" class="form-input"></div><div class="form-group"><label class="form-label">Target Date</label><input type="date" id="target-date" value="${appData.targetDate}" onchange="updateTargetDate(this.value)" class="form-input"></div></div></div>
                <div><h3>💾 Data Management</h3><div class="settings-data-management"><button onclick="downloadBackup()" class="btn btn-secondary">Download Backup</button><button onclick="document.getElementById('restore-file').click()" class="btn btn-secondary">Restore Backup</button><button onclick="clearAllData()" class="btn btn-danger">Clear All Data</button><button onclick="logout()" class="btn btn-danger">Logout</button></div><input type="file" id="restore-file" accept=".json" style="display: none;" onchange="restoreBackup(event)"></div>
                ${isAdmin ? `<div id="admin-controls"><h3>👑 Admin Controls</h3><button class="btn btn-secondary" onclick="loadUserList()">Refresh Users</button><ul id="user-list" class="mt-2"></ul></div>` : ''}
             </div></div></div>`;
        }

        // --- Charting & Analytics Functions ---
        function createFundGrowthChart(data) { return { type: 'line', data: { labels: data.fundGrowth.labels, datasets: [{ label: 'Fund Balance', data: data.fundGrowth.data, borderColor: 'var(--primary-color)', backgroundColor: 'rgba(0, 122, 255, 0.1)', fill: true, tension: 0.1 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Fund Growth Over Time' } }, scales: { y: { beginAtZero: true, ticks: { callback: value => '$' + value } } } } }; }
        function createIncomeVsExpenseChart(data) { return { type: 'bar', data: { labels: data.monthly.labels, datasets: [{ label: 'Total Income', data: data.monthly.gross, backgroundColor: 'var(--success-color)' }, { label: 'Total Expenses', data: data.monthly.expenses, backgroundColor: 'var(--danger-color)' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Monthly Income vs. Expenses' } }, scales: { x: { stacked: false }, y: { stacked: false, ticks: { callback: value => '$' + value } } } } }; }
        function createIncomeBreakdownChart(data) { return { type: 'bar', data: { labels: data.monthly.labels, datasets: [{ label: 'Net Pay', data: data.monthly.net, backgroundColor: 'var(--success-color)' }, { label: 'Taxes', data: data.monthly.taxes, backgroundColor: 'var(--danger-color)' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Monthly Gross Income Breakdown' } }, scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: value => '$' + value } } } } }; }
        function createExpenseDonutChart(data) { return { type: 'doughnut', data: { labels: data.expenseCategories.labels, datasets: [{ label: 'Expenses', data: data.expenseCategories.data, backgroundColor: data.expenseCategories.colors }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'All-Time Expense Breakdown' } } } }; }
        function createHoursVsPayChart(data) { return { type: 'bar', data: { labels: data.monthly.labels, datasets: [{ label: 'Hours Worked', data: data.monthly.hours, backgroundColor: 'rgba(255, 149, 0, 0.6)', yAxisID: 'y_hours' }, { label: 'Net Pay', data: data.monthly.net, borderColor: 'var(--success-color)', type: 'line', fill: false, tension: 0.1, yAxisID: 'y_money' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Monthly Hours Worked vs. Net Pay' } }, scales: { y_money: { type: 'linear', position: 'left', ticks: { callback: value => '$' + value } }, y_hours: { type: 'linear', position: 'right', ticks: { callback: value => value + 'h' }, grid: { drawOnChartArea: false } } } } }; }
        function createSavingsRateChart(data) { return { type: 'line', data: { labels: data.monthly.labels, datasets: [{ label: 'Monthly Savings Rate', data: data.monthly.savingsRate, borderColor: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.1)', fill: true, tension: 0.1 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Monthly Savings Rate' } }, scales: { y: { beginAtZero: true, ticks: { callback: value => value + '%' } } } } }; }
        function createAvgHourlyRateChart(data) { return { type: 'line', data: { labels: data.monthly.labels, datasets: [{ label: 'Effective Gross Hourly Rate', data: data.monthly.avgHourlyRate, backgroundColor: '#f97316', tension: 0.1, fill: false, borderColor: '#f97316' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Average Gross Hourly Rate' } }, scales: { y: { beginAtZero: false, ticks: { callback: value => '$' + value.toFixed(2) } } } } }; }
        function createCumulativeExpenseChart(data) { return { type: 'line', data: { labels: data.cumulativeExpenses.labels, datasets: data.cumulativeExpenses.datasets }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, stacked: true, plugins: { title: { display: true, text: 'Cumulative Spending by Category' } }, scales: { y: { stacked: true, ticks: { callback: value => '$' + value } } } } }; }
        function createTipByDayChart(data) { return { type: 'bar', data: { labels: data.weekly.labels, datasets: [{ label: 'Average Tip Amount', data: data.weekly.avgTips, backgroundColor: 'var(--success-color)' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Average Daily Tips by Day' }, legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { callback: value => '$' + value.toFixed(2) } } } } }; }
        function createGoalProjectionChart(data) { return { type: 'line', data: { labels: data.projection.labels, datasets: [{ label: 'Ideal Path', data: data.projection.idealPath, borderColor: 'var(--text-color-tertiary)', borderDash: [5, 5], fill: false, pointRadius: 0 }, { label: 'Actual Path', data: data.projection.actualPath, borderColor: 'var(--primary-color)', backgroundColor: 'rgba(0, 122, 255, 0.1)', fill: true, pointRadius: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Goal Projection' } }, scales: { y: { beginAtZero: true, ticks: { callback: value => '$' + value } } } } }; }
        function renderChart(chartType) { if (analyticsChart) { analyticsChart.destroy(); } const ctx = document.getElementById('analyticsChart')?.getContext('2d'); if (!ctx) return; document.querySelectorAll('.graph-btn').forEach(btn => btn.classList.remove('active')); document.querySelector(`.btn[data-chart="${chartType}"]`)?.classList.add('active'); let chartConfig; switch (chartType) { case 'growth': chartConfig = createFundGrowthChart(fullAnalyticsData); break; case 'income_vs_expense': chartConfig = createIncomeVsExpenseChart(fullAnalyticsData); break; case 'income_breakdown': chartConfig = createIncomeBreakdownChart(fullAnalyticsData); break; case 'expense_donut': chartConfig = createExpenseDonutChart(fullAnalyticsData); break; case 'hours_vs_pay': chartConfig = createHoursVsPayChart(fullAnalyticsData); break; case 'savings_rate': chartConfig = createSavingsRateChart(fullAnalyticsData); break; case 'avg_hourly_rate': chartConfig = createAvgHourlyRateChart(fullAnalyticsData); break; case 'cumulative_expense': chartConfig = createCumulativeExpenseChart(fullAnalyticsData); break; case 'tip_by_day': chartConfig = createTipByDayChart(fullAnalyticsData); break; case 'projection': chartConfig = createGoalProjectionChart(fullAnalyticsData); break; default: chartConfig = createFundGrowthChart(fullAnalyticsData); } analyticsChart = new Chart(ctx, chartConfig); }
        function getStatsForPeriod(startDate, endDate) {
            const start = parseLocalDate(startDate);
            const end = parseLocalDate(endDate);
            const income = appData.income.filter(i => { const d = parseLocalDate(i.date); return d >= start && d <= end; }).reduce((sum, i) => sum + i.amount, 0);
            const expenses = appData.expenses.filter(e => { const d = parseLocalDate(e.date); return d >= start && d <= end; });
            const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
            const expensesByCategory = {};
            appData.expenseCategories.forEach(cat => {
                const sum = expenses.filter(e => e.category === cat.id).reduce((s, e) => s + e.amount, 0);
                if (sum > 0) expensesByCategory[cat.id] = sum;
            });
            return { income, totalExpenses, savings: income - totalExpenses, byCategory: expensesByCategory };
        }
        function renderPeriodComparison() {
            const resultsDiv = document.getElementById('comparison-results');
            const startA = document.getElementById('compare-a-start').value;
            const endA = document.getElementById('compare-a-end').value;
            const startB = document.getElementById('compare-b-start').value;
            const endB = document.getElementById('compare-b-end').value;

            if (!startA || !endA || !startB || !endB) {
                resultsDiv.innerHTML = `<p class="text-gray text-center">Please select valid date ranges for both periods.</p>`;
                return;
            }

            const statsA = getStatsForPeriod(startA, endA);
            const statsB = getStatsForPeriod(startB, endB);

            const formatDiff = (a, b) => {
                const diff = a - b;
                const percent = b !== 0 ? (diff / b) * 100 : a > 0 ? 100 : 0;
                if (Math.abs(diff) < 0.01) return `<div class="diff-val">--</div>`;
                const cls = percent > 0 ? 'negative' : 'positive';
                return `<div class="diff-val ${cls}">${percent.toFixed(0)}%</div>`;
            };

            let summaryHtml = `
                <div class="comparison-grid">
                    <div class="grid-header">Metric</div><div class="grid-header val">Period A</div><div class="grid-header val">Period B</div>
                    <div class="cat-name">Income</div><div class="val">$${statsA.income.toFixed(2)}</div><div class="val">$${statsB.income.toFixed(2)}</div>
                    <div class="cat-name">Expenses</div><div class="val">$${statsA.totalExpenses.toFixed(2)}</div><div class="val">$${statsB.totalExpenses.toFixed(2)}</div>
                    <div class="cat-name font-bold">Savings</div><div class="val font-bold">$${statsA.savings.toFixed(2)}</div><div class="val font-bold">$${statsB.savings.toFixed(2)}</div>
                </div><hr class="my-4">`;

            const allCats = new Set([...Object.keys(statsA.byCategory), ...Object.keys(statsB.byCategory)]);
            let detailHtml = `<h4 class="mt-4 mb-2">Spending Breakdown</h4><div class="comparison-grid">`;
            allCats.forEach(catId => {
                const cat = getCategoryById(catId);
                const valA = statsA.byCategory[catId] || 0;
                const valB = statsB.byCategory[catId] || 0;
                detailHtml += `
                    <div class="cat-name">${cat.name}</div><div class="val">$${valA.toFixed(2)}</div><div class="val">$${valB.toFixed(2)}</div>
                    <div></div><div></div>${formatDiff(valA, valB)}`;
            });
            detailHtml += `</div>`;

            resultsDiv.innerHTML = summaryHtml + detailHtml;
        }

        // --- Core Logic Functions ---
        function getDataDurationMonths() { const allDates = [...appData.income.map(i => parseLocalDate(i.date)), ...appData.expenses.map(e => parseLocalDate(e.date))]; if (allDates.length === 0) return 1; const firstDate = new Date(Math.min.apply(null, allDates)); const duration = (new Date() - firstDate) / (1000 * 60 * 60 * 24 * 30.44); return Math.max(1, duration); }
        function getWeeksOfData() { if (appData.workShifts.length === 0) return 1; const firstDate = new Date(Math.min.apply(null, appData.workShifts.map(s => parseLocalDate(s.date)))); return Math.max(1, (new Date() - firstDate) / (1000 * 60 * 60 * 24 * 7)); }
        function getBestTipDays() { const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; const tipsByDay = {}; appData.income.filter(i => i.type === 'tips_daily').forEach(tip => { const dayOfWeek = parseLocalDate(tip.date).getDay(); if (!tipsByDay[dayOfWeek]) tipsByDay[dayOfWeek] = { total: 0, count: 0 }; tipsByDay[dayOfWeek].total += tip.amount; tipsByDay[dayOfWeek].count += 1; }); return Object.entries(tipsByDay).map(([day, data]) => ({ day: parseInt(day), avg: data.total / data.count })).sort((a, b) => b.avg - a.avg).filter(d => d.avg > 0).map(d => dayNames[d.day]); }
        function getExpenseReductionTips(category, amount) { const cat = getCategoryById(category); const avgMonthly = amount / getDataDurationMonths(); const tips = { food: [`Meal prep to reduce $${avgMonthly.toFixed(0)}/month food spending`, 'Cook more at home', 'Use coupons'], transportation: [`Carpool or use public transit`, 'Combine trips to save gas', 'Walk/bike for short distances'], entertainment: [`Find free activities`, 'Movie nights at home', 'Look for student discounts'], shopping: [`Use a 24-hour rule before buying`, 'Make a list and stick to it', 'Unsubscribe from retailer emails'], bills: [`Review and cancel unused subscriptions`, 'Negotiate phone/internet rates', 'Use cheaper streaming services'], other: [`Review miscellaneous spending of $${avgMonthly.toFixed(0)}/month`, 'Track this money carefully', 'Set a stricter budget for ' + cat.name] }; return tips[category] || tips.other; }
        
        function generateSuggestions() {
            const suggestions = [];
            const today = new Date();
            const target = parseLocalDate(appData.targetDate);
            const daysRemaining = Math.max(0, Math.ceil((target - today) / (1000 * 60 * 60 * 24)));
            const monthsRemaining = Math.max(1, daysRemaining / 30.44);
            const remaining = appData.goalAmount - appData.currentBalance;
            const monthlyNeeded = remaining > 0 ? remaining / monthsRemaining : 0;
            const durationMonths = getDataDurationMonths();
            const totalNetIncome = appData.income.reduce((s, i) => s + i.amount, 0);
            const totalExpenses = appData.expenses.reduce((s, e) => s + e.amount, 0);
            const avgMonthlySavings = (totalNetIncome - totalExpenses) / durationMonths;
            const savingsGap = monthlyNeeded - avgMonthlySavings;

            if (!isNaN(savingsGap) && totalNetIncome > 0) {
                if (savingsGap > 0) { suggestions.push({ category: 'goal', title: `Address Monthly Savings Gap of $${savingsGap.toFixed(0)}`, description: `You're on track to save $${avgMonthlySavings.toFixed(0)}/month, but you need $${monthlyNeeded.toFixed(0)}/month to reach your goal.`, actions: [`Review spending for areas to cut back.`, `Look for opportunities to increase your income.`, `Consider extending your target date if needed.`] }); }
                else { suggestions.push({ category: 'ontrack', title: `You're Exceeding Your Savings Goal!`, description: `Great work! You're saving $${(avgMonthlySavings - monthlyNeeded).toFixed(0)} more than needed each month.`, actions: [`Consider increasing your goal for more spending money.`, `Keep up the fantastic work!`, `Reward yourself with a small, planned treat.`] }); }
            }
            const topExpenseCategory = Object.entries(appData.expenses.reduce((acc, e) => { acc[e.category] = (acc[e.category] || 0) + e.amount; return acc; }, {})).sort((a,b) => b[1] - a[1])[0];
            if(topExpenseCategory && topExpenseCategory[1] > 0) {
                const cat = getCategoryById(topExpenseCategory[0]);
                suggestions.push({ category: 'spending', title: `Focus on Your Top Expense: ${cat.name}`, description: `Your highest spending category is ${cat.name}, totaling $${topExpenseCategory[1].toFixed(0)}. Small reductions here can have a big impact.`, actions: getExpenseReductionTips(topExpenseCategory[0], topExpenseCategory[1]) });
            }
            const totalHours = appData.income.reduce((s, i) => s + (i.hours || 0), 0);
            const avgHourlyNet = totalHours > 0 ? totalNetIncome / totalHours : 0;
            const estimatedWeeklyHours = appData.workShifts.filter(s => s.type === 'work').reduce((sum, s) => sum + (s.hours || 0), 0) / getWeeksOfData();
            if (estimatedWeeklyHours < 30 && avgHourlyNet > 0) { suggestions.push({ category: 'earning', title: `Opportunity to Increase Hours`, description: `You're currently averaging ${estimatedWeeklyHours.toFixed(1)} hours/week. Each additional shift could significantly boost your savings.`, actions: [`Ask your manager about available shifts.`, `An extra 5 hours per week could add ~$${(5 * avgHourlyNet * 4.33).toFixed(0)} to your monthly savings.`, `Consider picking up seasonal or holiday hours.`] }); }
            const bestDaysForTips = getBestTipDays();
            if (bestDaysForTips.length > 0) { suggestions.push({ category: 'earning', title: `Maximize Your Tips on ${bestDaysForTips.join(' & ')}`, description: `Your data shows you earn the highest average tips on ${bestDaysForTips.join(' and ')}. Try to work more on these days!`, actions: [`Prioritize scheduling shifts on these high-earning days.`, `Share what works on these days with coworkers to boost everyone's tips.`, `Track if this trend continues over the next few weeks.`] }); }
            return suggestions.slice(0, 6);
        }
        function toggleIncomeFormFields() { const type = document.getElementById('income-type')?.value; if (!type) return; const amountLabel = document.getElementById('income-amount-label'); const hoursGroup = document.getElementById('income-hours-group'); const taxesGroup = document.getElementById('income-taxes-group'); if (type.startsWith('tips')) { if(amountLabel) amountLabel.textContent = type === 'tips_daily' ? 'Daily Tips Amount ($)' : 'Total Tips for Pay Period ($)'; if(hoursGroup) hoursGroup.style.display = 'none'; if(taxesGroup) taxesGroup.style.display = 'none'; } else { if(amountLabel) amountLabel.textContent = 'Net Amount ($)'; if(hoursGroup) hoursGroup.style.display = 'block'; if(taxesGroup) taxesGroup.style.display = 'block'; } }
        async function addIncome() { const type = document.getElementById('income-type').value; const netAmount = parseFloat(document.getElementById('income-amount').value); const date = document.getElementById('income-date').value; let hours = 0; let taxes = 0; if (type === 'paycheck') { hours = parseFloat(document.getElementById('income-hours').value) || 0; taxes = parseFloat(document.getElementById('income-taxes').value) || 0; if (!hours) { await customAlert('Paychecks require hours.'); return; } } if (!netAmount || netAmount <= 0) return; appData.income.push({ id: Date.now(), type, amount: netAmount, hours, taxes, date }); appData.currentBalance += netAmount; await saveData(); document.getElementById('income-amount').value = ''; document.getElementById('income-hours').value = ''; document.getElementById('income-taxes').value = ''; document.getElementById('income-date').value = getCurrentDate(); document.getElementById('income-type').value = 'paycheck'; toggleIncomeFormFields(); renderView(); }
        async function updateIncome() { if (!editingIncome) return; const type = document.getElementById('income-type').value; const netAmount = parseFloat(document.getElementById('income-amount').value); const date = document.getElementById('income-date').value; let hours = 0; let taxes = 0; if (type === 'paycheck') { hours = parseFloat(document.getElementById('income-hours').value) || 0; taxes = parseFloat(document.getElementById('income-taxes').value) || 0; if (!hours) { await customAlert('Paychecks require hours.'); return; } } if (!netAmount || netAmount <= 0) return; const oldIncome = appData.income.find(inc => inc.id === editingIncome.id); const balanceDiff = netAmount - oldIncome.amount; appData.income = appData.income.map(inc => inc.id === editingIncome.id ? { ...editingIncome, type, amount: netAmount, hours, taxes, date } : inc); appData.currentBalance += balanceDiff; await saveData(); editingIncome = null; renderView(); }
        function startEditIncome(id) { const income = appData.income.find(inc => inc.id === id); if (!income) return; editingIncome = income; renderView(); setTimeout(() => { document.getElementById('income-type').value = income.type; toggleIncomeFormFields(); document.getElementById('income-amount').value = income.amount; document.getElementById('income-date').value = income.date; if (income.type === 'paycheck') { document.getElementById('income-hours').value = income.hours || ''; document.getElementById('income-taxes').value = income.taxes || ''; } }, 0); }
        function cancelEditIncome() { editingIncome = null; renderView(); }
        async function deleteIncome(id) { const income = appData.income.find(inc => inc.id === id); if (!income) return; appData.income = appData.income.filter(inc => inc.id !== id); appData.currentBalance -= income.amount; await saveData(); renderView(); }
        function toggleIncomeHistory() { showAllIncomeHistory = !showAllIncomeHistory; renderView(); }
        function setQuickAmount(amount) { const el = document.getElementById('expense-amount'); if (el) el.value = amount; }
        async function addExpense() { const category = document.getElementById('expense-category').value; const amount = parseFloat(document.getElementById('expense-amount').value); const date = document.getElementById('expense-date').value; const description = document.getElementById('expense-description').value || 'Expense'; if (!amount || amount <= 0) return; appData.expenses.push({ id: Date.now(), category, amount, date, description }); appData.currentBalance -= amount; await saveData(); document.getElementById('expense-amount').value = ''; document.getElementById('expense-description').value = ''; document.getElementById('expense-date').value = getCurrentDate(); renderView(); }
        async function updateExpense() { if (!editingExpense) return; const category = document.getElementById('expense-category').value; const amount = parseFloat(document.getElementById('expense-amount').value); const date = document.getElementById('expense-date').value; const description = document.getElementById('expense-description').value || 'Expense'; if (!amount || amount <= 0) return; const oldExpense = appData.expenses.find(exp => exp.id === editingExpense.id); const balanceDiff = oldExpense.amount - amount; appData.expenses = appData.expenses.map(exp => exp.id === editingExpense.id ? { ...editingExpense, category, amount, date, description } : exp); appData.currentBalance += balanceDiff; await saveData(); editingExpense = null; renderView(); }
        function startEditExpense(id) { const expense = appData.expenses.find(exp => exp.id === id); if (!expense) return; editingExpense = expense; renderView(); setTimeout(() => { document.getElementById('expense-category').value = expense.category; document.getElementById('expense-amount').value = expense.amount; document.getElementById('expense-date').value = expense.date; document.getElementById('expense-description').value = expense.description; }, 0); }
        function cancelEditExpense() { editingExpense = null; renderView(); }
        async function deleteExpense(id) { const expense = appData.expenses.find(exp => exp.id === id); if (!expense) return; appData.expenses = appData.expenses.filter(exp => exp.id !== id); appData.currentBalance += expense.amount; await saveData(); renderView(); }
        function handleDayDblClick(dateString) { selectDate(dateString); if (!showAddEvent) { toggleAddEventForm(); } }
        function toggleAddEventForm() { showAddEvent = !showAddEvent; if (!showAddEvent) { editingEvent = null; eventData = { date: '', endDate: '', startTime: '', endTime: '', type: 'work', description: '' }; } else { if (selectedDate) { eventData.date = new Date(selectedDate).toISOString().split('T')[0]; } } renderView(); }
        function toggleTimeInputs() { const type = document.getElementById('event-type')?.value; if (!type) return; const timeInputs = document.getElementById('work-time-inputs'); const vacationInputs = document.getElementById('vacation-period-inputs'); if (timeInputs) timeInputs.style.display = type === 'work' ? 'flex' : 'none'; if (vacationInputs) vacationInputs.style.display = (type === 'vacation' || type === 'sick') ? 'block' : 'none'; eventData.type = type; if (type !== 'vacation' && type !== 'sick') { eventData.endDate = ''; } }
        async function saveEvent() { const date = document.getElementById('event-date')?.value; const type = document.getElementById('event-type')?.value; const startTime = document.getElementById('event-start-time')?.value || ''; const endTime = document.getElementById('event-end-time')?.value || ''; const endDate = document.getElementById('event-end-date')?.value || ''; if (!date || !type) return; if (type === 'work' && (!startTime || !endTime)) { await customAlert('Work shifts require start and end times'); return; } if ((type === 'vacation' || type === 'sick') && endDate) { const startDateObj = new Date(date); const endDateObj = new Date(endDate); if (endDateObj < startDateObj) { await customAlert('End date must be after start date'); return; } if (editingEvent) { appData.workShifts = appData.workShifts.filter(s => !(s.type === editingEvent.type && s.description === editingEvent.description && s.date >= editingEvent.date && s.date <= (editingEvent.endDate || editingEvent.date))); } const eventsToAdd = []; const currentDate = new Date(startDateObj); while (currentDate <= endDateObj) { const hours = calculateEventHours(startTime, endTime, type); eventsToAdd.push({ id: Date.now() + Math.random(), date: currentDate.toISOString().split('T')[0], startTime, endTime, hours, type, description: `Multi-day ${type}` }); currentDate.setDate(currentDate.getDate() + 1); } appData.workShifts = [...appData.workShifts, ...eventsToAdd]; } else { const hours = calculateEventHours(startTime, endTime, type); if (editingEvent) { appData.workShifts = appData.workShifts.map(event => event.id === editingEvent.id ? { ...editingEvent, date, startTime, endTime, hours, type, description: '' } : event); } else { appData.workShifts.push({ id: Date.now(), date, startTime, endTime, hours, type, description: '' }); } } await saveData(); showAddEvent = false; editingEvent = null; eventData = { date: '', endDate: '', startTime: '', endTime: '', type: 'work', description: '' }; renderView(); }
        function cancelEventForm() { showAddEvent = false; editingEvent = null; eventData = { date: '', endDate: '', startTime: '', endTime: '', type: 'work', description: '' }; renderView(); }
        function selectDate(dateString) { selectedDate = dateString; if (showAddEvent) { eventData.date = new Date(dateString).toISOString().split('T')[0]; document.getElementById('event-date').value = eventData.date; } renderView(); }
        function editEvent(id) { const event = appData.workShifts.find(e => e.id === id); if (!event) return; editingEvent = event; eventData = { date: event.date, endDate: event.endDate || '', startTime: event.startTime || '', endTime: event.endTime || '', type: event.type, description: event.description || '' }; showAddEvent = true; renderView(); setTimeout(() => { document.getElementById('event-date').value = event.date; document.getElementById('event-type').value = event.type; if (event.startTime) document.getElementById('event-start-time').value = event.startTime; if (event.endTime) document.getElementById('event-end-time').value = event.endTime; if (event.endDate && document.getElementById('event-end-date')) { document.getElementById('event-end-date').value = event.endDate; } toggleTimeInputs(); }, 0); }
        async function deleteEvent(id) { appData.workShifts = appData.workShifts.filter(event => event.id !== id); await saveData(); renderView(); }
        function navigateMonth(direction) { currentCalendarDate.setMonth(currentCalendarDate.getMonth() + direction); selectedDate = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1).toISOString(); renderView(); }
        function navigateWeek(direction) { currentCalendarDate.setDate(currentCalendarDate.getDate() + (7 * direction)); renderView(); }
        async function updateSetting(key, value) { appData.settings[key] = value; await saveData(); }
        async function updateGoalAmount(value) { appData.goalAmount = value; await saveData(); }
        async function updateTargetDate(value) { appData.targetDate = value; await saveData(); }
        async function downloadBackup() { try { showDataStatus('Creating backup...', false, true); const response = await fetch(`${API_BASE}/api/backup`, { credentials: 'include' }); if (response.ok) { const blob = await response.blob(); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = response.headers.get('Content-Disposition').split('filename=')[1].replace(/"/g, ''); link.click(); URL.revokeObjectURL(url); showDataStatus('Backup downloaded!', false); } else { throw new Error('Backup failed'); } } catch (error) { showDataStatus('Backup failed', true); } }
        async function restoreBackup(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = async function(e) { try { const backupData = JSON.parse(e.target.result); if (await customConfirm('This will replace all your current data. Are you sure?')) { showDataStatus('Restoring backup...', false, true); const response = await fetch(`${API_BASE}/api/restore`, { method: 'POST', headers: { 'Content-Type': 'application/json', }, credentials: 'include', body: JSON.stringify(backupData) }); if (response.ok) { appData = { ...getDefaultData(), ...backupData }; renderView(); showDataStatus('Backup restored!', false); } else { throw new Error('Restore failed'); } } } catch (error) { showDataStatus('Invalid backup file', true); } }; reader.readAsText(file); event.target.value = ''; }
        async function clearAllData() {
            if (!await customConfirm('This will delete ALL your data and cannot be undone. Continue?')) return;
            try {
                showDataStatus('Clearing data...', false, true);
                const darkMode = appData.settings.darkMode;
                appData = getDefaultData();
                appData.settings.darkMode = darkMode;
                await saveData();
                renderView();
                showDataStatus('All data cleared', false);
            } catch (error) {
                showDataStatus('Clear failed', true);
            }
        }

        // --- Category Management ---
        function startEditCategory(id) { editingCategory = id; renderView(); }
        function cancelEditCategory() { editingCategory = null; renderView(); }
        async function saveCategory(id) {
            const isNew = id === 'new';
            const nameInput = document.getElementById(isNew ? 'category-name' : `category-name-${id}`);
            const colorInput = document.getElementById(isNew ? 'category-color' : `category-color-${id}`);
            const name = nameInput.value.trim();
            const color = colorInput.value;
            if (!name) { await customAlert("Category name cannot be empty."); return; }

            if (isNew) {
                const newId = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                if (appData.expenseCategories.find(c => c.id === newId)) { await customAlert("A category with this name already exists."); return; }
                appData.expenseCategories.push({ id: newId, name, color, icon: getDefaultData().expenseCategories.find(c=>c.id==='other').icon });
            } else {
                const category = appData.expenseCategories.find(c => c.id === id);
                if (category) { category.name = name; category.color = color; }
            }
            editingCategory = null;
            await saveData();
            renderView();
        }
        async function deleteCategory(id) {
            if (id === 'other') { await customAlert("The 'Other' category cannot be deleted."); return; }
            if (await customConfirm(`Are you sure you want to delete this category? All existing expenses in this category will be moved to 'Other'.`)) {
                appData.expenses = appData.expenses.map(e => e.category === id ? { ...e, category: 'other' } : e);
                appData.expenseCategories = appData.expenseCategories.filter(c => c.id !== id);
                await saveData();
                renderView();
            }
        }

        // --- Recurring Expenses ---
        function toggleRecurringExpenseForm(show) { document.getElementById('recurring-expense-form').style.display = show ? 'block' : 'none'; if (!show) editingRecurringExpense = null; }
        async function addRecurringExpense() {
            const description = document.getElementById('recurring-expense-description').value;
            const amount = parseFloat(document.getElementById('recurring-expense-amount').value);
            const category = document.getElementById('recurring-expense-category').value;
            const frequency = document.getElementById('recurring-expense-frequency').value;
            if (!description || !amount || amount <= 0) { await customAlert('Please fill out all fields.'); return; }
            
            const newBill = { id: `rec_${Date.now()}`, description, amount, category, frequency, nextDueDate: getCurrentDate() };
            appData.recurringExpenses.push(newBill);
            await saveData();
            toggleRecurringExpenseForm(false);
            renderView();
        }
        function startEditRecurringExpense(id) {
            const bill = appData.recurringExpenses.find(b => b.id === id);
            if (!bill) return;
            editingRecurringExpense = bill;
            toggleRecurringExpenseForm(true);
            document.getElementById('recurring-expense-description').value = bill.description;
            document.getElementById('recurring-expense-amount').value = bill.amount;
            document.getElementById('recurring-expense-category').value = bill.category;
            document.getElementById('recurring-expense-frequency').value = bill.frequency;
        }
        function cancelEditRecurringExpense() { editingRecurringExpense = null; toggleRecurringExpenseForm(false); renderView(); }
        async function updateRecurringExpense() {
            if (!editingRecurringExpense) return;
            const description = document.getElementById('recurring-expense-description').value;
            const amount = parseFloat(document.getElementById('recurring-expense-amount').value);
            const category = document.getElementById('recurring-expense-category').value;
            const frequency = document.getElementById('recurring-expense-frequency').value;
            if (!description || !amount || amount <= 0) { await customAlert('Please fill out all fields.'); return; }

            editingRecurringExpense.description = description;
            editingRecurringExpense.amount = amount;
            editingRecurringExpense.category = category;
            editingRecurringExpense.frequency = frequency;
            
            appData.recurringExpenses = appData.recurringExpenses.map(b => b.id === editingRecurringExpense.id ? editingRecurringExpense : b);
            await saveData();
            editingRecurringExpense = null;
            toggleRecurringExpenseForm(false);
            renderView();
        }
        async function deleteRecurringExpense(id) {
            if(await customConfirm('Are you sure you want to delete this recurring bill?')) {
                appData.recurringExpenses = appData.recurringExpenses.filter(b => b.id !== id);
                await saveData();
                renderView();
            }
        }
        async function processRecurringExpenses() {
            const today = new Date();
            today.setHours(0,0,0,0);
            let needsSave = false;
            appData.recurringExpenses.forEach(bill => {
                let nextDueDate = parseLocalDate(bill.nextDueDate);
                while (nextDueDate <= today) {
                    // Add the expense
                    appData.expenses.push({ id: Date.now() + Math.random(), category: bill.category, amount: bill.amount, date: bill.nextDueDate, description: bill.description + " (Recurring)" });
                    appData.currentBalance -= bill.amount;
                    showDataStatus(`Auto-paid recurring bill: ${bill.description}`, false);
                    
                    // Calculate the next due date
                    const daysToAdd = bill.frequency === 'weekly' ? 7 : bill.frequency === 'bi-weekly' ? 14 : 0;
                    if(daysToAdd > 0) {
                        nextDueDate.setDate(nextDueDate.getDate() + daysToAdd);
                    } else { // monthly
                        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
                    }
                    bill.nextDueDate = nextDueDate.toISOString().split('T')[0];
                    needsSave = true;
                }
            });
            if(needsSave) await saveData();
        }

async function loadUserList() {
    try {
        const res = await fetch(`${API_BASE}/api/users`, { credentials: 'include' });
        if (res.ok) {
            const data = await res.json();
            const list = document.getElementById('user-list');
            if (list) list.innerHTML = data.users.map(u => `
                <li class="flex gap-2 items-center">
                    <span class="flex-grow">${u}</span>
                    <button class="btn btn-small btn-secondary" onclick="impersonateUser('${u}')">Login</button>
                    <button class="btn btn-small btn-secondary" onclick="showUserEdit('${u}')">Edit</button>
                    <button class="btn btn-small btn-danger" onclick="deleteUser('${u}')">Del</button>
                </li>`).join('');
        }
    } catch (error) {
        console.error('Failed to load users', error);
    }
}

async function showUserEdit(username) {
    try {
        const res = await fetch(`${API_BASE}/api/users/${username}/info`, { credentials: 'include' });
        if (!res.ok) return;
        const info = await res.json();
        const newUsername = prompt('New username:', info.username);
        if (newUsername === null) return;
        const newPassword = prompt('New password (leave blank to keep same):', '');
        const body = { username, newUsername: newUsername || undefined };
        if (newPassword) body.newPassword = newPassword;
        const updateRes = await fetch(`${API_BASE}/api/users/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body)
        });
        if (updateRes.ok) {
            alert('User updated');
            loadUserList();
        } else {
            alert('Update failed');
        }
    } catch (err) {
        console.error('Edit user failed', err);
    }
}

async function deleteUser(username) {
    if (!confirm(`Delete ${username}?`)) return;
    try {
        const res = await fetch(`${API_BASE}/api/users/delete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username })
        });
        if (res.ok) {
            loadUserList();
        } else {
            alert('Delete failed');
        }
    } catch (err) {
        console.error('Delete user failed', err);
    }
}

async function impersonateUser(username) {
    try {
        const res = await fetch(`${API_BASE}/api/admin/impersonate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username })
        });
        if (res.ok) {
            await checkAuthStatus();
            await loadData();
            renderView();
        } else {
            alert('Login as user failed');
        }
    } catch (err) {
        console.error('Impersonate failed', err);
    }
}

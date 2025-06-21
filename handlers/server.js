const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    const imagePath = path.join(__dirname, 'index.html');
    res.sendFile(imagePath);
});

app.get('/dashboard', (req, res) => {
    const dashboardPath = path.join(__dirname, 'dashboard.html');
    res.sendFile(dashboardPath);
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ 
        success: true, 
        message: 'Server is working!',
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`🔗 Lucifer Support Web Server: http://localhost:${port}`);
    console.log(`📊 Dashboard: http://localhost:${port}/dashboard`);
    console.log(`ℹ️  Dashboard Status: Coming Soon`);
});

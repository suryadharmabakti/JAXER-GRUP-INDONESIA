// filepath: /C:/xampp/htdocs/opsilainqrupi/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve visi&misi.html
app.get('visi&misi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'visi&misi.html'));
});

// Route to serve Structural.html
app.get('/Structural', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Structural.html'));
});

// Route to serve Artikel.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Artikel.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
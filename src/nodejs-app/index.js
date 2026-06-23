const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/run', (req, res) => {
    const cmd = req.query.cmd;
    // Command injection vulnerability
    exec(cmd, (error, stdout, stderr) => {
        res.send(stdout);
    });
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    // XSS vulnerability
    res.send(`<h1>Results for: ${query}</h1>`);
});

app.listen(3000, () => console.log('Server running'));

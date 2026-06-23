import * as http from 'http';
import * as url from 'url';

const server = http.createServer((req, res) => {
    const query = url.parse(req.url!, true).query;
    
    // XSS vulnerability
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<html><body>Hello ${query.name}</body></html>`);
});

// Hardcoded credentials
const API_KEY = "sk-1234567890abcdef";
const DB_PASSWORD = "admin123";

server.listen(3000);

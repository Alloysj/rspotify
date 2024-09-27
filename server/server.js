// server.js
const http = require('http');

// Define the port
const PORT = 8081;

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/callback') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Callback received!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

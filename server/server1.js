const http = require('http')
const port = 8081;
const server= http.createServer((req, res) => {
if (req.url === '/callback) {
res.writeHead(200, { 'Content-type': 'text/plain'});
res.end('callback received');
});

server.listen(PORT, () => {
console.log(`server running at http://localhost:${port}/`;
})
:q

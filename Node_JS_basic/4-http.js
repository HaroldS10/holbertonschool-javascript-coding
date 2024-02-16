// create a small HTTP server 
// which should listen on port 1245
const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!\n');
});
app.listen(1245);

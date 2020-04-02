// Basic Web Server Setup

const http = require('http');

// Server Object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => {
    console.log('Server Running');
  });

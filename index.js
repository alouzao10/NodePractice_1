const Person = require('./person');
const Logger = require('./logger');

const man = new Person('Paul', 22);
man.greeting();

const woman = new Person('Sally', 24);
woman.greeting();

// Event Handling...
const logger = new Logger();
logger.on('message', data => {
  console.log(data);
});

logger.log('Hello Mundo');
logger.log('Hello World');
logger.log('Hello Globe');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //console.log(req.url);
  // if (req.url === '/') {
  //   // The index page
  //   //res.writeHead(200, { 'Content-Type': 'text/html' });
  //   //res.end('<h1>Home</h1>');

  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //       }
  //     }
  //   );
  // } else if (req.url === '/about') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //       }
  //     }
  //   );
  // } else if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Bob', age: 40 },
  //     { name: 'Sally', age: 38 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  // Build a file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Get file extension
  let extension = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check extension
  switch (extension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        console.log('Page not found');
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });

  //console.log(filePath);
  //res.end();
});

const PORT = process.env.PORT || 5000; // look for environment variable to set the port number
server.listen(PORT, () => {
  console.log('Server @ ' + PORT);
});

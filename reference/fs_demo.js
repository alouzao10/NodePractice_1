const fs = require('fs');
const path = require('path');

// Create a folder in current directory
fs.mkdir(path.join(__dirname, '/Test'), {}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Folder Created');
  }
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/Test', 'hello.txt'), 'Hello World', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Written');
  }
});

// Add to a file
fs.appendFile(
  path.join(__dirname, '/Test', 'hello.txt'),
  '\nSome Cool Stuff',
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('File Appended');
    }
  }
);

// Read from a file
fs.readFile(path.join(__dirname, '/Test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File Read\n' + data);
  }
});

// Rename a file
fs.rename(
  path.join(__dirname, '/Test', 'hello.txt'),
  path.join(__dirname, '/Test', 'HELLO.txt'),
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('File Renamed');
    }
  }
);

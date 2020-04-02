const path = require('path');

// basename = gets the base file name
console.log(__filename);
console.log(path.basename(__filename));

// dirname = returns the current name of the parent directory
console.log(__dirname);
console.log(path.dirname(__dirname));

// extname = gets the file extension
console.log(__filename);
console.log(path.extname(__filename));

// parse = creates the path object for the file location
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// join = builds a file path to the current directory
//../test/hrllo.html
console.log(path.join(__dirname, 'test', 'hello.html'));

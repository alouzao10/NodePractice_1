const os = require('os');

// Operating System
console.log('OS: ' + os.platform());

// CPU Info
console.log('CPU: ' + os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log('Free Memory: ' + os.freemem());

// Total Memory
console.log('Total Memory: ' + os.totalmem());

// Home Directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());

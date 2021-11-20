var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('Test.txt');
console.log("Synchronous read: " + data.toString());

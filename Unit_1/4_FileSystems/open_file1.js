const fs = require('fs');
console.log("Opening the files!!");
// Asynchronous Version to open / create a file
fs.open('new-file.txt', 'w', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("new-file.txt opened successfully!");
});
// Synchronous Version to open / create a file
fs.openSync('newdoc.txt', 'w');
console.log("newdoc.txt opened successfully!");
var fs = require("fs");
console.log("Getting the file information!");
fs.stat('Test.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("The file information was retrieved!");
   // Check file type
   console.log("isDirectory ? " + stats.isDirectory());   
   console.log("isFile ? " + stats.isFile()); 
});
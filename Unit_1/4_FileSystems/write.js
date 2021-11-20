const fs = require('fs')
console.log("Creating New Files!");
// Asynchronous version to create a new file
fs.writeFile('input1.txt', "Welcome to File System in AWP1", function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("input1.txt has been created successfully!!");
})
// Synchronous version to create a new file
fs.writeFileSync('read11.txt', "Learning to write file in Syn way")
console.log("read11.txt has been created successfully!!")
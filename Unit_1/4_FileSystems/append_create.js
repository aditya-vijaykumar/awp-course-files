const fs = require('fs');
console.log("Creating New Files!");
// Asynchronous Version to create a file using append
fs.appendFile('append11.txt', "This is my New File.", function (err) {
  if (err) throw err;
  console.log("append.txt has been created successfully!!")
}); 
// Synchronous Version to create a file using append
fs.appendFileSync('append111.txt', "This is my Second File.")
console.log("append1.txt has been created successfully!!")
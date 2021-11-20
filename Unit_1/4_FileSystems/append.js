 
const fs = require('fs');
console.log("Updating New Files!");
// Asynchronous Version of append to add content to the existing file
fs.appendFile('append11.txt', " Since my file is already exists, therefore it will simply add this content to the file.", function (err) {
  if (err) throw err;
  console.log("append.txt has been updated successfully!!")
});
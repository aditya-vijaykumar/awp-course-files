const fs = require('fs');
console.log("Deleting the Files!");
// Asynchronous version to delete a file
fs.unlink('./demo.html', function(err){
    if (err) {
        return console.error(err);
    }
    console.log("demo.html has been removed successfully!!");
});
// Synchronous version to delete a file
fs.unlinkSync('./input1.txt');
console.log("input1.txt has been removed successfully!!");
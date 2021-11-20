var fs = require('fs'); 
fs.writeFile('examplefile.txt', 'Hello Welcome to AWP Exam!', function (err)
 { 
     if (err) throw err;
      console.log('Created a new file!'); // Use fs.readFile() method to read the file 
      fs.readFile('examplefile.txt', 'utf8', 
      function(err, data)
      { 
          // Display the file content 
          console.log('reading the content of created file');
           console.log(data); fs.writeFile('examplefile.txt', ' This is my updated content.', function (err)
            { 
                if (err) throw err; fs.readFile('examplefile.txt', 'utf8', function(err, data)
                { // Display the file content 
                    console.log('Updating the content of the created file!');
                     console.log(data); 
                     fs.unlink('examplefile.txt', function (err) 
                     { 
                         if (err) throw err; 
                         console.log('Deleting the created file!'); 
                        }); 
                    }); 
                }); 
            });
         });
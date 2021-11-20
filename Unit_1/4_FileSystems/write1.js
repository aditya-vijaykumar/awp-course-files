const fs = require('fs')
fs.writeFile('content.txt', 'This is my first file!', (err) => {
    if (err) {
        throw err;
    };

    process.stdout.write('File created successfully!');
});

const fs=require('fs');
fs.stat('input.txt', (err, stats) => {
    if (err) {
      console.error(err)
    }
    else{
        console.log(stats.isFile());      // true
        console.log(stats.isDirectory());      // false
        console.log(stats.size);      // 1024
    }
  });
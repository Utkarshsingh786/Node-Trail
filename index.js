const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");
for (var i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirpath}/file${i}.txt`, "A text file");
}

fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.log("file name is", item);
  });
}); 

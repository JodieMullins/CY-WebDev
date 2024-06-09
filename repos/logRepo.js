let fs = require('fs');

const FILE_NAME = './logs/log.txt';

let logRepo = {
  write: function (data, resolve, reject) {
    // write file (create string file)
    let toWrite = "*".repeat(80) + "\r\n";
    // write data 
    toWrite += "Date/Time: " + new Date().toLocaleDateString() + "\r\n";
    // write error that occurred
    toWrite += "Exception Info: " + JSON.stringify(data) + "\r\n";
    // ***********************************
    toWrite += "*".repeat(80) + "\r\n";

    fs.writeFile(FILE_NAME, toWrite, function (err) {
      if (err) {
        reject(err);
      }
      else {
        resolve(true);
      }
    });
  }
};

// export as module responsible for logging 
module.exports = logRepo;
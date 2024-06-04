let fs = require('fs');

const FILE_NAME = './assets/shoes.json';

// 
let shoeInfo = {

    get: function(resolve, reject) {

        fs.readFile(FILE_NAME, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    getbyId: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data)) {
            if (err) {
                reject(err);
            }
            else {
                let shoe = JSON.parse(data).find(s => s.id == id);
                resolve(shoe);
            }
        }
    }
};


// 
module.exports = shoeInfo;
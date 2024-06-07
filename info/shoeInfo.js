let fs = require('fs');

const FILE_NAME = './assets/shoes.json';

/**
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
*/

let shoeInfo = {
    get: function (resolve, reject) {
      fs.readFile(FILE_NAME, function (err, data) {
        if (err) {
          reject(err);
        }
        else {
          resolve(JSON.parse(data));
        }
      });
    },
    getById: function (id, resolve, reject) {
      fs.readFile(FILE_NAME, function (err, data) {
        if (err) {
          reject(err);
        }
        else {
          let shoes = JSON.parse(data).find(s => s.id == id);
          resolve(shoes);
        }
      });
    },

    // PASS IN SEARCH OBJECT
    search: function (searchObject, resolve, reject) {

      //open file, get data
      fs.readFile(FILE_NAME, function (err, data) {
        if (err) {
          reject(err);
        }
        else {
          let shoes = JSON.parse(data);
          // Perform search
          if (searchObject) {
            /**
             * EXAMPLE SEARCH OBJECT
             * let searchObject= {
             * "id": 1,
             * "name": 'A' 
             * };
             */
            shoes = shoes.filter(
              // check if Object has id value; if it does, search by ID
              s => (searchObject.id ? s.id == searchObject.id : true) &&
              // perform case-insensitive search if object searched does indeed have name
                (searchObject.name ? s.name.toLowerCase().indexOf(searchObject.name) >= 0 : true));
          }
  
          resolve(shoes);
        }
      });
    }
  };
  



// 
module.exports = shoeInfo;
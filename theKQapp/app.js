const express = require('express');
const debug = require('debug')('app');

/**
 * 
 * to activate debug in Windows:
 * 

 * npm install --save-dev cross-env
 * 
 * {
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}


 * in terminal,type:
 * > set DEBUG=* & node app.js
 * 
 */

const app = express();

app.get('/', (req, res) => {
    req.send('Hello from my app');
})

app.listen(3000, () =>{
    console.log('listening on port 3000')
});


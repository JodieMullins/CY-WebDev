const express = require('express');
const debug = require('debug')('app');

const app = express();

app.get('/', (req, res) => {
    req.send('Hello from my app');
})

app.listen(3000, () =>{
    console.log('listening on port 3000')
});


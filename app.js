const express = require('express');
const path = require('path');
const app = express();

const publipath = path.resolve(__dirname, './public');

app.use(express.static(publipath ));

app.listen(3000, () =>{
    console.log('Servidor ok en puerto 3000');
});


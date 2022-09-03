
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () =>{
    console.log('Servidor ok en puerto 3000');
});

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});




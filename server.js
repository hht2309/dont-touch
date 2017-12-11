// Get dependencies 
const express = require('express');
const path = require('path');
const http = require('http'); 
const argv = require('optimist'); 

// Create express app
const app = express(); 

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist'))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

const port = process.env.PORT || '1234'; 

// Create http-server

app.listen(port, argv.ip); 
console.log('app listening on port: ', port)

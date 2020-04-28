// npm libraries
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app =  express();

// Import Routes
const authentication = require('./routes/authentication-routes');

// middleware
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(express.static(__dirname));

// Routes
app.use('/auth',authentication);


app.use(express.static(path.join(__dirname,'../../../../login/dist')));
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'../../../../login/dist/index.html'));
});

const server = app.listen(8200,() =>{
    console.log("Server is running at 8200");
})
//import React from 'react';
//import ReactDOM from 'react-dom';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// main app
//import App from './containers/App';

//ReactDOM.render(<App />, document.getElementById('app'))


//set up express app

const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/unigo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/', router);
app.use("/styles", express.static(__dirname + '/style.css'));

app.use(express.static('Pages'))
app.use(express.static('images'))


// initialize routes

app.use('/', require('./routes/api'));


//error handling middleware

app.use(function(err, req, res, next){
       //console.log(err);
       res.status(422).send({error: err.message});

});


//listen for requests

app.listen(process.env.port || 4000, function(){
        console.log('now listening for requests port 4000');
});
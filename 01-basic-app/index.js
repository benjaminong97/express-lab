// we need to use express for this, we are going to include
const express = require('express');
//express object is returned
// nodejs looks for 'express' folder inside 'node_modules'
//locates index.js, which returns an object
// stored into const express 

//create an express application
let app = express();

//add routes - route is a url on our server
//first argument - path of the URL
// second argument - a function which happens when a client tries to access the path
app.get('/', function(req,res){
    // first argument -- the request from the client
    //second argument -- the respnse which we are going to send back
    res.send('Hello world!')
})

app.get('/about-us', function(req,res){
    res.send("About Us")
})

//any words or sequence of characters that have : in front is a parameter/argument 
app.get('/hello/:name', function(req,res){
    // res.send() can send back a string or an integer, integer must be a HTTP status code - like 200, 404, 500
    res.send("Hi," + req.params.name)

})

//query string --> parameters in a query string are separated with an amperson
//people dont like query string because it is poor for search engine optimisation 
app.get('/calculate', function(req,res){
    //all query string parameters will be in the query object 
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.send("sum= " + (a+b));
})


//app.get must come before app.listen 

//start the server
//first arg - port number 
app.listen(3000, function(){
    console.log('server started')
})

// npm install -g nodemon --> with node monitor installed, server will auto restart whenever a change is made 
// require express
const express = require('express');

//require hbs
const hbs = require('hbs')

// create the express application
const app = express();

//tell express we are using hbs as template engine
app.set('view engine', 'hbs')

// put in the routes 
app.get('/', function(req, res){
    res.render('index.hbs')
})

app.get('/hello/:firstname/:lastname', function(req,res){
    let fName = req.params.firstname;
    let lName = req.params.lastname;
    res.render('hello',{
        'firstName': fName,
        'lastName': lName,
    })
})

//tell express where our static files are

// start server
app.listen(3000, function(){
    console.log('server started')
})
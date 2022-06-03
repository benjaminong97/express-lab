const express = require('express');

const hbs = require('hbs')

const app = express();

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', function(req, res){
    // do not return anything in the route function --> must do an res.send (if not the browser will just be waiting )
    res.render("index");
})

app.get('/hello/:name', function(req,res){
    let name = 
    res.render('hello')
})

//start server at port 3000
app. listen(3000, function(){
    console.log('server started');
})
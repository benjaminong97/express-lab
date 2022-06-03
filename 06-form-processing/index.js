const express = require('express')
const hbs = require('hbs')
const waxOn = require('wax-on')

const app = express()
app.set('view engine', 'hbs')
app.use(express.static('public')) //whenever expresses looks for a static file it will be in public
waxOn.on(hbs.handlebars)
waxOn.setLayoutPath('views/layouts')

//routes
app.get('/', function(req,res){
    res.send('hello world')
})

//start server
app.listen(3000, function(){
    console.log('server has started')
})


//post is to get new information onto the server 

//set up express to process forms - before the routes 
app.use(express.urlencoded({
    'extended':false,
}))
// inherit the template -- automated copy and paste 
// what is the base template? --> find out what is common among all pages 
// wax-on is built on top of hbs 

const express = require('express');
const hbs = require('hbs');

const app = express();


app.set('view engine', 'hbs');
app.use(express.static('public'))

//set up wax-on
wax.on(hbs.handlebars);
// tell wax-on where to find the base layouts (templates)
wax.setLayoutPath('./views/layouts')
//all hbs files should be in views, only base layout should be in views/layouts 

app.get('/', function(req,res){
    res.send('hello world')
})

app.listen(3000, function(){
    console.log('server started')
})
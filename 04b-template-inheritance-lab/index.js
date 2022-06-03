//setting up all dependencies
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

let app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts')

app.get('/', function(req,res){
    res.render('index')
})

app.get('/fault', function(req,res){
    res.render('fault')
})

app.get('/admin', function(req,res){
    res.render('admin')
})

app.get('/fruits', function(req,res){
    let dishes = [
        {
            'name' : 'chicken rice',
            'calories': 800
        },
        {
            'name' : 'wanton mee',
            'calories': 600

        }
    ]
    res.render('fruits')
})

// registering custom helpers
// ifEquals
// the callback function has three arguments
// arg1, arg2, are the data from the hbs
hbs.handlebars.registerDecorator('ifEquals', function(arg1, arg2, options){
    if (arg1==arg2){
        options.fn(this);
    } else {
        options.inverse(this);
    }
})

app.listen(3000, function(){
    console.log("server started")
})
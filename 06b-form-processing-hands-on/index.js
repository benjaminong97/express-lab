//set up all the required packages
const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')

let app = express()

app.set('view engine', 'hbs')//setting hbs as the view engine

//enable forms
app.use(express.urlencoded({extended:false})) // fpr processing html forms usually its false because html forms are quite simple

wax.on(hbs.handlebars) // enable wax-on for handlebars (for template inheritance)
wax.setLayoutPath('views/layouts') // set out the path for the template

//route to render form
app.get('/', function(req,res){ //req to request from the client, data from the client usually inside req
    res.render('index') // res to send back to client, must ensure that in the end an res.send/render/status/json
    // only one can be executed 
})

app.get('/bmi', function(req,res){
    res.render('bmi')
})

app.get('/fruits', function(req,res){
    res.render('fruits')
})

// app.post('/', function(req,res){
//     console.log(req.body)
//     res.send(req.body)
// })

//route to get data from form
app.post('/bmi', function(req,res){
    let {weight, height, units} = req.body;
    let bmi = Number(weight)/(Number(height)**2)
    if (units == 'imperial'){
        bmi = bmi * 703
    }
    res.render("display_bmi", {bmi})
    })

app.post('/fruits', function(req,res){
    let items = req.body.items
    if (!(items)) {
        items = []
    }
    else if (Array.isArray(items) == false) {
        items = [items]
    }

    //if dont want to use if else, can use an object with fruit, cost pair
    let cost = 0
    if (items.includes('apple')){
        cost += 3
    }
    if (items.includes('banana')){
        cost += 4
    }
    if (items.includes('durian')){
        cost += 15
    }
    if (items.includes('orange')){
        cost += 6
    }


    console.log(cost)
    res.render('display_fruits', {'cost': cost})
})

//server
app.listen(3000, function(){
    console.log("server started")
})
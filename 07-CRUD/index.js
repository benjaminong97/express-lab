//set up all the required packages
const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')
const axios = require('axios')

let app = express()

app.set('view engine', 'hbs')//setting hbs as the view engine

//enable forms
app.use(express.urlencoded({extended:false})) // fpr processing html forms usually its false because html forms are quite simple

wax.on(hbs.handlebars) // enable wax-on for handlebars (for template inheritance)
wax.setLayoutPath('views/layouts') // set out the path for the template

app.get('/', async function(req,res){
    let response = await axios.get('https://ckx-restful-api.herokuapp.com/sightings')
    res.render('sightings', {'foodSightings': response.data})
})

app.listen(3000, function(){
    console.log('server started')
})
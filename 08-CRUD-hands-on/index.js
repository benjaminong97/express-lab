//set up all the required packages
const express = require('express')
const hbs = require('hbs')
const wax = require('wax-on')
const axios = require('axios')

let app = express()

//add in css?
//app.use(express.static(<filename>))

app.set('view engine', 'hbs')//setting hbs as the view engine

//enable forms
app.use(express.urlencoded({extended:false})) // fpr processing html forms usually its false because html forms are quite simple

wax.on(hbs.handlebars) // enable wax-on for handlebars (for template inheritance)
wax.setLayoutPath('views/layouts') // set out the path for the template

const BASE_API_URL = 'https://ckx-movies-api.herokuapp.com/'

//routes
app.get('/', async function(req,res){
    let response = await axios.get(BASE_API_URL+"movies")
    res.render('read', {'movies':response.data})
})

// form to create move entry
app.get('/create_movie_form', function(req,res){
    res.render('create')
})

// reading the data from the form and adding it to the api
app.post('/create_movie_form', async function(req,res){
    let data = {
        'title': req.body.title,
        'plot': req.body.plot,
    }

    await axios.post(BASE_API_URL + 'movie/create', data)
    res.redirect('/')
})

//updating api values
app.get('/edit/:movie_id', async function(req,res){
    //getting the unique identifier
    let movieId = req.params.movie_id

    //extracting out current data to populate the form
    let response = await axios.get(BASE_API_URL+'movie/'+movieId)
    let movie = response.data
    let title = movie.title
    let plot = movie.plot
    res.render('edit_movie', {
        'title': title,
        'plot': plot,
    })
})

app.post('/edit/:movie_id', async function(req,res){
    let title = req.body.title
    let plot = req.body.plot
    let movieId = req.params.movie_id
    

    let payload = {
        'title': title,
        'plot': plot,
    }

    await axios.patch(BASE_API_URL+'movie/'+movieId, payload)

    res.redirect('/')
})

// delete
app.get('/movie/delete/:movie_id', async function(req,res){
    let movieId = req.params.movie_id
    let response = await axios.get(BASE_API_URL+'movie/'+movieId)
    let movieData = response.data.title +', '+ movieId
    res.render('delete', {'movieData': movieData})
} )

app.post('/movie/delete/:movie_id', async function(req,res){
    let movieId = req.params.movie_id
    await axios.delete(BASE_API_URL+'movie/'+movieId)
    res.redirect('/')
})

app.listen(3000, function(){
    console.log('server started')
})
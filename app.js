const express = require('express')

const hbs = require('hbs')
require('./hbs/helpers')

let app = express()

app.use( express.static( __dirname + '/public'))

//Express HBS engine
hbs.registerPartials( __dirname + '/views/partials')
app.set( 'view engine', 'hbs');

app.get( '/', (req,res ) => {
    //res.send(200,'Hello world')

    title = 'Hola, internauta!! '

    res.render('home',{
        title: title
    })
})
app.get( '/about', (req,res ) => {
    //res.send(200,'Hello world')

    name = ' Fernando Malgor '

    res.render('about',{
        nombre: name
    })
})

app.listen(3000, ()=>{
    console.log(' Servidor escuchando en puerto: 3000')

})
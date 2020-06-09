const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')

const app = express()

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsDirectoryPath)

// Setup static directories to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Welcome",
        contentOfPage: "Home page content",
        name: "Kishan Savaliya"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Kishan Savaliya"
    })
})

app.get('/contact-me', (req, res) => {
    res.render('contact', {
        title: "Contact Me",
        contentOfPage: "Contact page content",
        name: "Kishan Savaliya"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        contentOfPage: "Help page content",
        name: "Kishan Savaliya"
    })
})

app.get('/products', (req, res) => {
    if (!req.query.id) {
        return res.send({
            error: "Provide product ID to search."
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "Help - Page not found!",
        error_msg: "Help data which you're trying to find, not found!",
        name: "Kishan Savaliya"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "Page not found!",
        error_msg: "Page that you had requested, not found!",
        name: "Kishan Savaliya"
    })
})

app.listen(3000, () => {
    console.log("Server is up and running on port 3000")
})
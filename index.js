const express = require('express')
require('dotenv').config()
const app = express()

// Declare routes that people can visit on the application.
//White Page
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Dynamic color page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `)
})

app.post('/:color', (req, res) => {
    res.send('Hello world')
})

app.listen(process.env.PORT)

//static routes
//dynamic routes
//controler or routers
//catch all routes
//export import
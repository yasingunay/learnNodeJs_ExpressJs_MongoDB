const express = require('express'); // import express
const ejs = require('ejs'); // import ejs
const mongoose = require('mongoose'); // import mongoose

const adminPageRoute = require('./routes/admin/pageRouter'); // import adminPageRoute



const app = express(); // initialize express

app.use(express.static('public')); // configure express to use public folder

app.set('view engine', 'ejs'); // configure express to use ejs

mongoose.connect("mongodb://127.0.0.1:27017/portfolio").then(() => {
    console.log('Connected to MongoDB')
}) // connect to mongodb




// ADMIN ROUTES
app.use('/admin', adminPageRoute); // configure express to use adminPageRoute

const port = 3000; // we will use this later
app.listen(port, () => {
console.log(`Listening on port ${port}`)
}); // run the server on port 7000 and log a message to say so


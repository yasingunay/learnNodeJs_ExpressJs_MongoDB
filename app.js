const express = require('express'); // import express
const ejs = require('ejs'); // import ejs
const mongoose = require('mongoose'); // import mongoose
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override")

const siteRouter = require('./routes/site/siteRouter'); // import siteRouter


// ADMIN
const adminPageRoute = require('./routes/admin/pageRouter'); // import adminPageRoute
const certificateRoute = require("./routes/admin/certificateRoute");



const app = express(); // initialize express

mongoose.connect("mongodb://127.0.0.1:27017/portfolio").then(() => {
    console.log('Connected to MongoDB')
}) // connect to mongodb

app.set('view engine', 'ejs'); // configure express to use ejs


app.use(express.static('public')); // configure express to use public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);


// ADMIN ROUTES
app.use("/admin", adminPageRoute); // configure express to use adminPageRoute
app.use("/admin/certificate", certificateRoute); // configure express to use certificateRoute


// SITE ROUTES
app.use('/', siteRouter); // configure express to use siteRouter


const port = 3000; // we will use this later
app.listen(port, () => {
console.log(`Listening on port ${port}`)
}); // run the server on port 7000 and log a message to say so


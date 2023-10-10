const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const projectSchema = new Schema({
   AboutContent : String,
}); // create a new schema

const About = mongoose.model('About',aboutSchema); // create a new model from the schema

module.exports = About; // export the model
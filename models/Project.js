const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const projectSchema = new Schema({
    projectName : String,
    projectDescription : String,
    projectURL : String,
    projectIcon : String,
}); // create a new schema

const Project = mongoose.model('Project', projectSchema); // create a new model from the schema

module.exports = Project; // export the model
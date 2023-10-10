const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const resumeSchema = new Schema({
    school : String,
    faculty : String,
    eduStartedYear : String,
    eduEndYear : String,
    contry : String,
    jobTitle : String,
    company : String,
    expStartedYear : String,
    expEndYear : String,
    language : String,
    description : String,

}); // create a new schema

const Resume = mongoose.model('Resume', resumeSchema); // create a new model from the schema

module.exports = Resume; // export the model
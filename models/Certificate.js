const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const certificateSchema = new Schema({
    certificateName : String,
    certificateImage : String,
    certificateType : String,
    
}); // create a new schema

const Certificate = mongoose.model('Certificate', certificateSchema); // create a new model from the schema

module.exports = Certificate; // export the model
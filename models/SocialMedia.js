const mongoose = require('mongoose'); // import mongoose

const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const SocialMediaSchema = new Schema({
   linkedin : String,
    github : String,
    youtube : String,
    instagram : String,
    twitter : String,


}); // create a new schema

const SocialMedia = mongoose.model('SocialMedia',SocialMediaSchema); // create a new model from the schema

module.exports = SocialMedia; // export the model
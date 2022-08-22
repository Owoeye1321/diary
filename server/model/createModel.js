
// this is the code for ./models.js
  
const mongoose = require('mongoose')
  
const signUpSchema = new mongoose.Schema({
        title :String,
        body: String,
        user:String
});
  
// Exporting our model object
module.exports = userModel = mongoose.model('notes', signUpSchema);
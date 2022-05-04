
// url
// ref 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = new Schema( {
    url: {type: String, required: true} 
});

module.exports = mongoose.model("Pic", picSchema);
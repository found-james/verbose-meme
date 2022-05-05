
// url
// ref 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = new Schema( {
    url: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

const Pic = mongoose.model("Pic", picSchema);
module.exports = Pic;
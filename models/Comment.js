const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {type: String, required: true},
    user : { type: Schema.Types.ObjectId, ref: "User"},
    pic: { type: Schema.Types.ObjectId, ref: "Pic"}}, 
    { timestamps: true});


module.exports = mongoose.model("Comment", commentSchema);

// text
// title
// ref user
// ref pic
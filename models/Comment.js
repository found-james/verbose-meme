const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {type: String, required: true},
    user : { type: Schema.Types.ObjectId, ref: "User"},
    pic: { type: Schema.Types.ObjectId, ref: "Pic"}}, 
    { timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

// text
// title
// ref user
// ref pic
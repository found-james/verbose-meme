const { Comment } = require("../../models")

module.exports = { getAllCmts }
async function getAllCmts (req, res) {
    try {
      const cmtCollection = await Comment.find({});
      res.status(200).json({ success: true, msg: cmtCollection });
    } catch (err) {
      res.status(400).json({ success: false, msg: err.message});
    }
  }
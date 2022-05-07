const { Comment } = require("../../models")

module.exports = { getAllCmts, createCmt }

async function getAllCmts (req, res) {
    try {
      const cmtCollection = await Comment.find({});
      res.status(200).json({ success: true, msg: cmtCollection });
      return cmtCollection;

    } catch (err) {
      res.status(400).json({ success: false, msg: err.message});
    }
  }

async function createCmt (req, res) {
  try {
    const cmt = await Comment.create(req.body);
  
  } catch (err) {
    res.status(400).json({ success: false , msg: err.message });
  }
}
const express = require('express');
const router = express.Router();

const { getAllCmts } = require("../../controllers/api/comments");

router.get("/", getAllCmts);

module.exports = router;
const express = require('express');
const router = express.Router();

const { getAllCmts, createCmt } = require("../../controllers/api/comments");

router.get("/", getAllCmts);

router.post("/", createCmt);

module.exports = router;
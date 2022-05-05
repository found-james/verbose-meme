const express = require('express');
const router = express.Router();

import { getAllCmts } from "../../controllers/api/comments";

app.get("/comments", getAllCmts);

module.exports = router;
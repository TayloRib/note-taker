const express = require("express");
const path = require('path');
const router = express.Router();


const noteRouter = require("./note");

router.use("/api/notes", noteRouter)


module.exports = router
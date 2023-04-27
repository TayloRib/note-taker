const express = require("express");
const path = require('path');
const api = require('./routes/index.js');

const router = express();

router.use(express.static("public"))

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use('/', api)

const noteRouter = require("./routes/");
router.use(noteRouter)

// GET Route for homepage
router.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
router.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.listen(3000,()=>{
    console.log("listening on port 3000!")
})

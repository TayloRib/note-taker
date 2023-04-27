const express = require("express");
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
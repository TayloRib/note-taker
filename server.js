const express = require("express");
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const router = express();

router.use(express.static("public"))

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use('/api', api)



// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

router.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
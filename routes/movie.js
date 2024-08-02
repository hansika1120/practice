const express = require('express');
const router = express.Router();
const {handleCreateMovie,handleGetMovie} = require("../controller/movie");

router.route("/")
.get(handleGetMovie)
.post(handleCreateMovie);


module.exports = router;
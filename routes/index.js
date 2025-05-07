var express = require("express");
var router = express.Router();

const waldo = require("../controllers/waldoController");

/* GET home page. */
router.get("/", waldo.getScores);
router.get("/:name/:xpos/:ypos", waldo.search);
router.post("/", waldo.createScore);

module.exports = router;

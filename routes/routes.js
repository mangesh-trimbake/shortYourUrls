var express = require("express");
var router = express.Router();

const urlRouter = require("./urls.js");

router.use("/urls", urlRouter);

module.exports = router;

require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

const express = require("express");

const bodyParser = require("body-parser");

var multer = require("multer");
var upload = multer();

const router = require("./routes/routes");

const app = express();

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());

// Configuring the database
require("./config/database/mongoose");

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World" });
// });

app.use(express.static("public"));

app.use(router);

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});

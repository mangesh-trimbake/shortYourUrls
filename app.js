require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "dev"}` });

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Configuring the database
require("./config/database/mongoose");

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});

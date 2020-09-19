const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});

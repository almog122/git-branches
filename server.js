const express = require("express");
const bodyParser = require("body-parser");
const api = require("./server/routes/api");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", api);

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
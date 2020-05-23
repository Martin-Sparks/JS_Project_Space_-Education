const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createRouter = require("./helpers/create_router.js");
const app = express();

app.use(cors());

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("solar_system");
    const detailsCollection = db.collection("details");
    const detailsRouter = createRouter(detailsCollection);
    app.use("/api/details", detailsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log("listening on port 3000");
});

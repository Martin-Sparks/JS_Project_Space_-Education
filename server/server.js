const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.json());

// MongoClient.connect('mongodb://localhost:27017')
//     .then()
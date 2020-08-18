const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

var cors = require('cors');

const routes = require('./route')

const mongoDbConnectionString = require('./config/mongodb');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/products', routes);

const server = http.createServer(app);

mongoose.connect(mongoDbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => {
    server.listen(PORT, () => {
      console.log("Server is listening on PORT: " + PORT);
    });
  })
  .catch(err => {
    console.error(err);
  });




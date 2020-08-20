require('dotenv').config();

const http = require('http');

const express = require('express');

const mongoose = require('mongoose');

var cors = require('cors');

const app = express();

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes=require('./route')

const PORT = process.env.PORT || 4000;

app.use('/api/products', routes);

const server = http.createServer(app);

mongoose.Promise=global.Promise;


app.use('/',(req,res)=>{
  
    res.send(`Server running in ${PORT}`)

})

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => {
    server.listen(PORT, () => {
      console.log("Server is listening on PORT: " + PORT);
    });
  })
  .catch(err => {
    console.error(err);
  });




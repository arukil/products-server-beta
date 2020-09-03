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

const routes = require('./route')

const PORT = process.env.PORT || 4000;

app.use('/api/products', routes);

const server = http.createServer(app);

mongoose.Promise = global.Promise;


app.use('/', (req, res) => {

  
const userInfoSchema =mongoose.Schema({
       
    name:String
  // ...other fields
});

const myDB = mongoose.connection.useDb('user');

const UserInfo = myDB.model('User', userInfoSchema);

 UserInfo.find({},(err,data)=>{

  res.send(`Server running in ${data}`)
 })
})


mongoose.connect(process.env.DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .catch(function (error) {
    console.log(`Unable to connect to the Mongo db  ${error} `);
  });


const connection = mongoose.connection;

connection.once('open', () => {
  server.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
  });
})

mongoose.connection.on('error', err => {
  console.log(`failed to connect to MongoDB ${err}`)
});





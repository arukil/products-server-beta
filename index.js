require('dotenv').config();

require('events').EventEmitter.prototype._maxListeners = 100;

const http = require('http');

const express = require('express');

const mongoose = require('mongoose');

var cors = require('cors');

const jwt = require('jsonwebtoken');


const app = express();

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const productRoutes = require('./routes/productRoute')

const userRoutes = require('./routes/userRoute')

const PORT = process.env.PORT || 4000;

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

const server = http.createServer(app);

mongoose.Promise = global.Promise;


app.use('/', (req, res) => {

  res.send(`arukil Server running `)

})


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB)
  .catch(function (error) {
    console.log(`Unable to connect to the Mongo db  ${error} `);
  });


const connection = mongoose.connection;

connection.once('open', () => {
  server.listen(PORT, () => {
    console.log("Server is listening on PORT: " + PORT);
  });
})

connection.on('error', err => {
  console.log(`failed to connect to MongoDB ${err}`)
});





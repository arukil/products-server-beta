const mongoose = require('mongoose');

const grocerySchema = mongoose.Schema({

    name: String,

    image: String,

    route: String,

    type: String

});

const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Main", grocerySchema);




const mongoose = require('mongoose');

const grocerySchema = mongoose.Schema({

    name: String,

    image: String, 

    list: Array,
       
    type: String

});

const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Main", grocerySchema);




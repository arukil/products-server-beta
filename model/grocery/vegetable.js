const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({

    name: String,

    image: String, 

    available: Array,
       
    stock: Boolean,

    type: String

});

const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Vegetable", vegetableSchema);


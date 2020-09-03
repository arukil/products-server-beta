const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({

    name: String,

    image: String, 

    available: Array,
       
    stock: Boolean,

    type: String


});


const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Fruit", fruitSchema);


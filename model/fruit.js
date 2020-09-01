const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({

    name: String,

    image: String, 

    available: Array,
       
    stock: Boolean,

    type: String


});
module.exports = mongoose.model("Fruit", fruitSchema);


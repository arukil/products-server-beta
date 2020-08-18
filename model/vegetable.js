const mongoose = require('mongoose');

const vegSchema = mongoose.Schema({

    name: String,

    image: String, 

    kg: Object,

    price:Number

});

module.exports = mongoose.model("Vegetable", vegSchema);

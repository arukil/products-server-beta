const mongoose = require('mongoose');

const vegSchema = mongoose.Schema({

    name: String,

    image: String, 

    available: Array,
       
    quantity: Number,

    stock: Boolean,

    type: String


});
module.exports = mongoose.model("Vegetable", vegSchema);


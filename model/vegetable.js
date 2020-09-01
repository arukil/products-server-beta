const mongoose = require('mongoose');

const vegetableSchema = mongoose.Schema({

    name: String,

    image: String, 

    available: Array,
       
    stock: Boolean,

    type: String


});
module.exports = mongoose.model("Vegetable", vegetableSchema);


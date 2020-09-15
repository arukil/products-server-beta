const mongoose = require('mongoose');

const beverageSchema = mongoose.Schema({

    name: String,

    flavour: String,

    image: String,
    
    available: Array,

    type: String
});


const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Beverage", beverageSchema);


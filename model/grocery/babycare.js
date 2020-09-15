const mongoose = require('mongoose');

const babycareSchema = mongoose.Schema({

    name: String,

    flavour: String,

    image: String,
    
    available: Array,

    type: String
});


const myDB = mongoose.connection.useDb('productList');

module.exports = myDB.model("Babycare", babycareSchema);


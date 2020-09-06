const mongoose = require('mongoose');

const provisionSchema = mongoose.Schema({

    name: String,
    list: Array

});

const myDB = mongoose.connection.useDb('productList');


module.exports = myDB.model("Provision", provisionSchema);


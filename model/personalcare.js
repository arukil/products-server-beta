const mongoose = require('mongoose');

const personalcareSchema = mongoose.Schema({

    name: String,
    list: Array

});

const myDB = mongoose.connection.useDb('productList');


module.exports = myDB.model("Personalcare", personalcareSchema);


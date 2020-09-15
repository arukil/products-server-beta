const mongoose = require('mongoose');

const housecareSchema = mongoose.Schema({

    name: String,
    list: Array

});

const myDB = mongoose.connection.useDb('productList');


module.exports = myDB.model("Housecare", housecareSchema);


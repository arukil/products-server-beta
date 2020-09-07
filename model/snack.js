const mongoose = require('mongoose');

const snackSchema = mongoose.Schema({

    name: String,
    list: Array

});

const myDB = mongoose.connection.useDb('productList');


module.exports = myDB.model("Snack", snackSchema);


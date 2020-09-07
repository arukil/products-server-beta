const mongoose = require('mongoose');

const packedfoodSchema = mongoose.Schema({

    name: String,
    list: Array

});

const myDB = mongoose.connection.useDb('productList');


module.exports = myDB.model("Packedfood", packedfoodSchema);


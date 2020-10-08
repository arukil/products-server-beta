const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const savedLoctionSchema = mongoose.Schema({

    userId: { type: String, required: true },

    address: { type: Array, required: true },

    date: { type: Date, default: Date.now },

});

savedLoctionSchema.plugin(uniqueValidator);

const myDB = mongoose.connection.useDb('user');

module.exports = myDB.model("Savedlocation", savedLoctionSchema);

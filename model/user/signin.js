const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({

    username: { type: String, required: true },

    phonenumber: { type: String, required: true, unique: true },

    date: { type: Date, default: Date.now },

});

userSchema.plugin(uniqueValidator);

const myDB = mongoose.connection.useDb('user');

module.exports = myDB.model("User", userSchema);

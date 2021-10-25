const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema and Model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
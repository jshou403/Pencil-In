const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: Date, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    teacher: {
        type: Boolean,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
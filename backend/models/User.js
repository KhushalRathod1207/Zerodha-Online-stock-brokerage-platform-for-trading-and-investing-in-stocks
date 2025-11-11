const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    balance: { type: Number, default: 50000 }, // Default funds
    phone: { type: String },
    address: { type: String },
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: "email", // Use email instead of username
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

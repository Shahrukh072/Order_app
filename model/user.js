const mongoose = require("mongoose");
const db = require("../config/mongoose");
const bcrypt = require("bcrypt");
const passwordValidator = require('password-validator');

// Create a schema
var schema = new passwordValidator();

const saltrounds = 10;
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type:String,
        required: true,
    },
    mobileNo:{
        type:Number,
        required:true,
    },
    password : {
        type:String,
        required:true,
    },
    user_id: {
        type: String,
        require: true,
    },
    sub_total: {
        type: String,
        require: true,
    },

});

userSchema.pre('save', function(next){
   

// Add properties to it

    this.password = bcrypt.hashSync(this.password, saltrounds);
    next();
})
const User = mongoose.model("User", userSchema);
module.exports = User;
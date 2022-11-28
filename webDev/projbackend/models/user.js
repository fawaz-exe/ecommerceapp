const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require('uuid/v1');

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },

    lastName: {
        type: String,
        maxlength: 32,
        trim: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    userinfo: {
        type: String,
        trim: true
    },
    //TODO: comeback here

    password: {
        type: String,
        trim: true
    },

    salt: String,

    role: {
        type: Number,
        default: 0
    },

    purchases: {
        type: Array,
        default: []
    },

    encry_password: {
        type: String,
        required: true

    }

}, {timestamps : true});


    //Virtual Fields
userSchema.virtual("password")
    .set(function(password) {
        this._password = password
        this.salt =  uuidv1();
        this.encry_password = this.securePassword(password);

    })
    .get(function(){
        return this._password;
    })



userSchema.method = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword === this.encry_password);
    },

    securePassword: function(plainpassword){
        if(!password)
        return "";

        try {
            return crypto
            .createHmac('sha256', secret)
            .update(plainpassword)
            .digest('hex'); 
        } catch (error) {
            return ""; 
        }
    }
}

module.exports = mongoose.model("User", userSchema);
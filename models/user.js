const mongoose = require('mongoose')

const {Schema , model} = mongoose ;

const UserSchema = new Schema({
    firstName :{
        type : String ,
        required : true
    },
    name : {
        type : String ,
        required : true
    },
    email :{
        type : String ,
        required : true
    },
    email :{
        type : String ,
        unique : true,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

module.exports = user = model("user", UserSchema)
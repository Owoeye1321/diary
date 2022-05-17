const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new  Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
},{
    timestamps:true,
})

const users = mongoose.model('users',userSchema)

module.export = users
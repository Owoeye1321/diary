const mongoose = require('mongoose')

const Schema = mongoose.schema

const userSchema = new  Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    content:{
        type:password,
        required:true,
        minlength:8
    }
},{
    timestamps:true,
})

const users = mongoose.model('diaryContent',userSchema)

module.export = users
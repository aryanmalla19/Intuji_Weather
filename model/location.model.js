const mongoose = require('mongoose');
const {Schema} = mongoose;

const locationSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    latitude:{
        type:Number,
    },
    longtitude:{
        type:Number,
    }
})

module.exports = mongoose.model('locations',locationSchema);
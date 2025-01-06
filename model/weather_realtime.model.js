const mongoose = require('mongoose');
const { Schema } = mongoose;

const weatherRealtimeSchema = Schema({
    location_id:{
        type:mongoose.Types.ObjectId,
        ref:"location",
    },
    temperature:{
        type:Number,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
    humidity:{
        type:Number,
        required:true,
    },
    wind_speed:{
        type:Number,
        required:true,
    },
    updated_at:{
        type:Date,
        default:Date.now()
    },
});

module.exports =  mongoose.model('weather_realtime',weatherRealtimeSchema)
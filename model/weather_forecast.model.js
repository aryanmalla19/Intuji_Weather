const mongoose = require('mongoose');
const { Schema } = mongoose;

const weatherForecastSchema = Schema({
    location_id: {
        type:mongoose.Types.ObjectId
    },
    date:{
        type:Date,
        required:true,

    },
    min_temp:{
        type:Number,
        required:true,
    },
    max_temp:{
        type:Number,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    }

})

module.exports = mongoose.model('weather_forecast',weatherForecastSchema)
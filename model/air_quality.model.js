const mongoose = require('mongoose');
const { Schema } = mongoose;

const airQualitySchema = Schema({
    location_id: {
    type:mongoose.Types.ObjectId,
    ref:"location"
    },
    aqi:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('air_quality',airQualitySchema)
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const DB_URI = process.env.DB_URI;

const connectToDB = function(){
    mongoose.connect(DB_URI).then(()=>{
        console.log('Successfully connected to MongoDB database.')
    }).catch(err => console.log(err.reason));
}

module.exports = connectToDB
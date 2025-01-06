const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const connectToDB = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

//Connect to Database
connectToDB();

// Middlewares
app.use(cors());
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//Routes
app.use('/weather',require('./routes/weather.route'))

app.listen(PORT || 3000, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
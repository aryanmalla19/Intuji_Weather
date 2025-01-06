const express = require('express');
const { handleGetWeatherRealTime, handleGetAllLocations, handleGetAirQulaity, handleGetWeatherForecast } = require('../controllers/weather.controller')
const Router = express.Router();

Router.get('/realtime', handleGetWeatherRealTime)
Router.get('/forecast', handleGetWeatherForecast)
// Router.post('/generate', handleGenerateWeather)
Router.get('/airqulaity',handleGetAirQulaity)
Router.get('/locations', handleGetAllLocations)

module.exports = Router;
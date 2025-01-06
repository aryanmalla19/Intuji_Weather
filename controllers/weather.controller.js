const weather_realtime = require("../model/weather_realtime.model");
const locations = require("../model/location.model");
const weather_forecast = require("../model/weather_forecast.model");
const air_quality = require("../model/air_quality.model");

const handleGetWeatherRealTime = async (req, res) => {
  // console.log(req.params)
  const location_params = req.body.location;
  const db_location_id = await locations.find({ name: location_params });
  const id = db_location_id[0]._id;
  const weathers = await weather_realtime
    .find({ location_id: id })
    .select("-_id -location_id -updated_at");
  if (weathers) {
    res.send({
      ...weathers["0"]._doc,
      location: location_params,
    });
  } else {
    res.send({
      message: "Error ! Location not found ",
    });
  }
};

const handleGetAllLocations = async (req, res) => {
  const all_locations = await locations.find({});

  if (all_locations) {
    res.send({ ...all_locations });
  } else {
    res.send({
      message: "Not found Location found",
    });
  }
};

const handleGetWeatherForecast = async (req, res) => {
  const location_params = req.body.location;
  const db_location_id = await locations.find({ name: location_params });
  const id = db_location_id[0]._id;
  const weather_forecasts = await weather_forecast.find({
    location_id: id,
  });
  if (weather_forecasts) {
    res.send({
      ...weather_forecasts,
    });
  } else {
    res.send({
      message: "Error ! Location not found ",
    });
  }
};

const handleGenerateWeather = async (req, res) => {
  const location_name = req.body.location;
  const db_location_id = await locations.find({ name: location_name });
  const id = db_location_id[0]._id;
  await weather_realtime.create({location_id:id,temperature:32.32,condition:"condition",humidity:21,wind_speed:32,updated_at:Date.now()});
  await air_quality.create({location_id:id,api:63,description:"V. Good"});
  await weather_forecast.create({location_id:id,date:Date.now(),min_temp:32.32,max_temo:12,condition:"V. Good"});
};

const handleGetAirQulaity = async (req, res) => {
  const location_name = req.body.location;
  const db_location_id = await locations.find({ name: location_name });
  const id = db_location_id[0]._id;
  const air_quality_data = await air_quality
    .find({ location_id: id })
    .select("-_id -location_id");
  if (air_quality_data) {
    res.send({
      ...air_quality_data["0"]._doc,
      location: location_name,
    });
  } else {
    res.send({
      message: "Error ! Location not found ",
    });
  }
};

const handleDeleteOneLocation = async (req, res) => {
  const location_name = req.params.location;
  const deletion = await locations.deleteOne({ location: location_name });
  if (deletion) {
    res.send({
      message: "success",
    });
  } else {
    res.send({
      message: "Error ! Location not found",
    });
  }
};

module.exports = {
  handleGetWeatherRealTime,
  handleGetAllLocations,
  handleGetWeatherForecast,
  handleDeleteOneLocation,
  handleGetAirQulaity,
};

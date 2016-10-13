// Create a temperature.js module to translate degrees Kelvin into Celsius and also into Fahrenheit


var apiKey = require('./../.env').apiKey;

Temperature = function(){
};

Temperature.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temperature);
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

exports.weatherModule = Temperature;

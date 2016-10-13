// Include a separate temperature-interface.js file to handle triggering the API call and displaying the temperature.


var Temperature = require('./../js/temperature.js').weatherModule;

var displayTemperature = function(city, temperatureData) {
  $('.showTemperature').text("The Temperature in " + city + " is " + temperatureData);
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#temperatureLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });
});

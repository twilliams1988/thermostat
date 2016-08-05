$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#temperature-up').click(function() {
    thermostat.upTemp();
  updateTemperature();
  });
  $('#temperature-down').click(function() {
    thermostat.downTemp();
  updateTemperature();
  });
  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });
  $('#power-saving-toggle').click(function() {
    thermostat.powerSavingModeToggle();
    $('#power-saving-status').text(thermostat.powerSavingMode ? 'on' : 'off');
    updateTemperature();
  });
  function updateTemperature() {
    $('#temperature').text(thermostat.desiredTemp);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
});

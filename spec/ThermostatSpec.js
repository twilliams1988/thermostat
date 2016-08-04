describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at default temperature 20ºc', function() {
    expect(thermostat.DEFAULT_TEMPERATURE).toEqual(20);
  });

  it('allows user to increase desiredTemp', function() {
    thermostat.upTemp();
    expect(thermostat.desiredTemp).toEqual(21);
  });

  it('allows user to decrease desiredTemp', function() {
    thermostat.downTemp();
    thermostat.downTemp();
    expect(thermostat.desiredTemp).toEqual(18);
  });

  it('has a minimum temperature of 10º', function() {
    thermostat.desiredTemp = 10;
    expect(function(){ thermostat.downTemp(); }).toThrowError('Can not set the temperature below 10º');
  });

  it('power saving mode on limits temperature to 25º', function() {
    thermostat.desiredTemp = 25;
    expect(function(){ thermostat.upTemp(); }).toThrowError('Temperature is limited to 25º in power saving mode');
  });

  it('power saving mode off max temperature is 32º', function() {
    thermostat.powerSavingModeToggle();
    thermostat.desiredTemp = 32;
    expect(function(){ thermostat.upTemp(); }).toThrowError('Temperature is limited to 32º');
  });

  it('power saving mode can be turned on and off', function() {
    thermostat.powerSavingModeToggle();
    expect(thermostat.powerSavingMode).toEqual(false);
    thermostat.powerSavingModeToggle();
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('resets temperature to 20º', function() {
    thermostat.desiredTemp = 21;
    thermostat.resetTemp();
    expect(thermostat.desiredTemp).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
});

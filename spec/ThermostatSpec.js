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
});

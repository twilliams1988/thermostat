describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
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

});

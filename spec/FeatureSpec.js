describe('Thermostat', function() {

  var thermostat;

  it('starts at 20ºc', function() {
    thermostat = new Thermostat();
    expect(thermostat.desiredTemp).toEqual(20);
  });


});

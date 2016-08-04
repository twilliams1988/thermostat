function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.desiredTemp = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
}

Thermostat.prototype = {

  upTemp: function() {
    if(this.desiredTemp === 25 && this.powerSavingMode === true) {
      throw new Error('Temperature is limited to 25º in power saving mode');
    }
    this.desiredTemp += 1;
  },
  downTemp: function() {
    if(this.desiredTemp === 10) {
      throw new Error('Can not set the temperature below 10º');
    }
    this.desiredTemp -= 1 ;
  }
};

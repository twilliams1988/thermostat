function Thermostat() {
  this.desiredTemp = 20;
}

Thermostat.prototype.desiredTemp = function () {
  return this.desiredTemp;
};

// Thermostat.prototype.upTemp = function () {
//   this.desiredTemp += 1;
// };
//
// Thermostat.prototype.downTemp = function () {
//   this.desiredTemp -= 1;
// };

Thermostat.prototype = {

  upTemp: function() {
    this.desiredTemp += 1;
  },
  downTemp: function() {
    this.desiredTemp -= 1;
  }
};

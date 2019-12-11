function Thermostat() {
  this.currentTemperature = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
};

//refactoring so that we can use this property (currentTemperature) outside Thermostat object
Thermostat.prototype.getCurrentTemperature = function() {
  return this.currentTemperature;
};
// why triple equals?
Thermostat.prototype.isMinTemp = function() {
  return this.currentTemperature === this.MIN_TEMP;
};
Thermostat.prototype.up = function() {
this.currentTemperature += 1 ;
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
this.currentTemperature -= 1 ;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};


'use strict';
describe ('Thermostat' ,function () {

  var thermostat;
// var thermostat = new Thermostat(); refactor
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ('starts at 20 degrees', function () {

    expect(thermostat.getCurrentTemperature()).toEqual(20);
 });

 it('increases in temperature with up()', function() {
   thermostat.up();
   expect(thermostat.getCurrentTemperature()).toEqual(21);
 });


 it('decreases in temperature with down()', function() {
   thermostat.down();
   expect(thermostat.getCurrentTemperature()).toEqual(19);
 });

 it('has a min of 10 degrees', function () {
   for (var i = 0; i < 10; i++) {
     thermostat.down();
   }
   expect(thermostat.getCurrentTemperature()).toEqual(10);
});

 it('has power saving mode on by default', function() {
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

it('can switch the PowerSavingMode back' , function() {
  thermostat.switchPowerSavingModeOff();
   expect(thermostat.isPowerSavingModeOn()).toBe(false);
  thermostat.switchPowerSavingModeOn();
   expect(thermostat.isPowerSavingModeOn()).toBe(true);
});
// used describe like we use Rspec context() to start with when
 describe('when power saving mode is on', function() {
  it ('has a maximum temperature of 25 degrees', function() {
     for (var i = 0; i < 5; i++) {
      thermostat.up();
     }
     expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
});
 });

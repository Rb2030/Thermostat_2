'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start at 20', function(){
    expect(thermostat.readTemperature()).toEqual(20)

  });

  it('up button increases the temperature', function(){
    thermostat.upButton()
    expect(thermostat.readTemperature()).toEqual(21)

  });

  it('down button decreases the temperature', function(){
    thermostat.downButton()
    expect(thermostat.readTemperature()).toEqual(19)

  });

  it('should have a minimum temp of 10', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.downButton();
    }
    expect(thermostat.readTemperature()).toEqual(10);
  })

  it('should have a maximum temp of 25 if power saving mode is on', function(){
    thermostat.turnOnPSM();
    for (var i = 0; i < 6; i++) {
      thermostat.upButton();
    }
    expect(thermostat.readTemperature()).toEqual(25);
  })

});

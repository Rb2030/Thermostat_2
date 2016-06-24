'use strict';
function Thermostat(){
  this._temperature = 20;
  this._minTemp = 10
  this._maxTemp = 100
};

Thermostat.prototype = {
  readTemperature: function(){
    return this._temperature;
  },

upButton: function(){
  if (this._temperature === this._maxTemp) {
    return;
  }
    this._temperature++;
  },

downButton: function(){
  if (this._temperature === this._minTemp) {
    return;
  }
  this._temperature--;
},

turnOnPSM: function(){
  this._maxTemp = 25;
}
};

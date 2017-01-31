'use strict';

function Plane() {

};

Plane.prototype.land = function(airport) {
  airport.planes.push(this);
};

Plane.prototype.takeoff = function(airport) {
  var index = airport.planes.indexOf(this);
  if (index > -1) {
    airport.planes.splice(index, 1);
    return airport.planes;
  };
};

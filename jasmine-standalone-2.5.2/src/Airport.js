'use strict';

function Airport() {
  this.planes = [];
  this.capacity = 2;
};

Airport.prototype.isStormy = function() {
  return false
};

Airport.prototype.clearForLanding = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if (this.isStormy === true) {
    throw new Error('Stormy! No takeoff!');
  } else {
    var index = this.planes.indexOf(plane);
    if (index > -1) {
      this.planes.splice(index, 1);
      return this.planes;
    };
  }
};

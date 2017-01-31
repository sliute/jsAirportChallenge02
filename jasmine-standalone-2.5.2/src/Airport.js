'use strict';

function Airport() {
  this.planes = [];
  this.capacity = 2;
};

Airport.prototype.isStormy = function() {
  return false
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.planes.length === this.capacity) {
    throw new Error('Airport at capacity!');
  } else {
    this.planes.push(plane);
  };
};

Airport.prototype.clearForTakeoff = function(plane) {
  if (this.isStormy()) {
    throw new Error('Stormy! No takeoff!');
  } else {
    var index = this.planes.indexOf(plane);
    if (index > -1) {
      this.planes.splice(index, 1);
      return this.planes;
    };
  }
};

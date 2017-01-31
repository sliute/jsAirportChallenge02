'use strict';

describe('Plane lands at airport', function(){

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('when instructed to land', function(){
    plane.land(airport);
    expect(airport.planes).toContain(plane);
  });
});

'use strict';

describe('Plane lands at airport', function(){

  var airport;
  var plane;
  var plane2;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane();
  });

  it('when instructed to land', function(){
    plane.land(airport);
    expect(airport.planes).toContain(plane);
  });

  describe('then takes off', function(){
    it("and is removed from the planes array", function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes).not.toContain(plane);
    });
  });
});

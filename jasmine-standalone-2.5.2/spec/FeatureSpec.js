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

  it("unless there's a storm", function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() {plane.takeoff(airport)};).toThrowError('Stormy! No takeoff!');
    // expect(function() {airport.clearForTakeoff(plane)};).toThrowError('Stormy! No takeoff!');
    expect(airport.planes).toContain(plane);
  });

});

'use strict';

describe('Feature tests:', function(){
  var airport;
  var plane;
  var plane2;
  var plane3;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
  });

  it('Plane lands when instructed to do so', function(){
    plane.land(airport);
    expect(airport.planes).toContain(plane);
  });

  it("unless airport is at default capacity", function(){
    plane.land(airport);
    plane2.land(airport);
    expect(function() {plane3.land(airport) }).toThrowError('Airport at capacity!');
  });

  it("though this default capacity can be overriden as appropriate", function(){
    airport.capacity = 1
    plane.land(airport);
    expect(function() {plane2.land(airport) }).toThrowError('Airport at capacity!');
  });

  it("Then the plane takes off and is removed from the planes array", function(){
    plane.land(airport);
    spyOn(airport, "isStormy").and.returnValue(false);
    plane.takeoff(airport);
    expect(airport.planes).not.toContain(plane);
  });

  it("unless there's a storm", function(){
    plane.land(airport);
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function() {plane.takeoff(airport)}).toThrowError('Stormy! No takeoff!');
    expect(function() {airport.clearForTakeoff(plane)}).toThrowError('Stormy! No takeoff!');
    expect(airport.planes).toContain(plane);
  });
});

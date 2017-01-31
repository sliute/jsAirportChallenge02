'use strict';


describe('Airport', function(){

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('is expected to', function(){
    it("have a planes array", function(){
      expect(airport.planes).toEqual([])
    });

    it("have a planes array - tBD", function(){
      expect(airport.planes).toBeDefined()
    });

    it("know if there's a storm going on", function() {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(airport.isStormy()).toBe(true);
    });

    it("know if there's no storm when clear", function() {
      spyOn(airport, "isStormy").and.returnValue(false);
      expect(airport.isStormy()).toBe(false);
    });

    it("have a default maximum capacity", function(){
      expect(airport.capacity).toBe(2);
    })

    it("that you can override as appropriate", function(){
      airport.capacity = 4
      expect(airport.capacity).toBe(4);
    })
  });
});

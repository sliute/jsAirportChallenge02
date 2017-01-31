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
  });
});

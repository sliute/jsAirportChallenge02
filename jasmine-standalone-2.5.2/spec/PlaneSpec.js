'use strict';


describe('Plane', function(){

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('is expected to', function(){
    it("respond to land", function(){
      expect(typeof plane.land).toBe("function")
    });

    it("respond to land - tBD", function(){
      expect(plane.land).toBeDefined()
    });
  });
});

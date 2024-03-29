var multiply = require ("../src/multiply.js");
var expect = require("chai").expect;

describe("Multiply", function() {
    it("should multiply properly when passed numbers", function() {
      expect(multiply(2, 4)).to.equal(8);
    });
  
    it("should throw when not passed numbers", function() {
      expect(function() {
        multiply(2, "4");
      }).to.throw(Error);
    });
  });
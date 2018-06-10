var formatName = require ("../src/formatName.js");
var expect = require("chai").expect;

describe("formatName", function() {
    it("should return empty string when it gets an empty list", function() {
        expect(formatName([])).to.equal("");
      });

    it("should display the name when one name is passed into the array.", function() {
      expect(formatName(["Kyle"])).to.equal("Kyle");
    });

    it("should separate the names with & when two names are passed into the array.", function() {
        expect(formatName(["Kyle", "Phil"])).to.equal("Kyle & Phil");
      });

    it("should separate the names with a comma when array is 3 or more.", function() {
        expect(formatName(["Kyle", "Phil", "Josh"])).to.equal("Kyle, Phil & Josh");
    });
  });
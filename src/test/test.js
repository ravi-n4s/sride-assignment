const assert = require("assert");
const { isPrime } = require("../helpers");

describe("Test 1", () => {
  it("1 is not prime should return false", () => {
    assert.equal(isPrime(1), false);
  });
});

describe("Test 2", () => {
  it("2 is prime should return true", () => {
    assert.equal(isPrime(2), true);
  });
});

describe("Test 3", () => {
  it("10 is not prime should return false", () => {
    assert.equal(isPrime(10), false);
  });
});

describe("Test 4", () => {
  it("when 04 is passed as date should return false", () => {
    assert.equal(isPrime("04"), false);
  });
});

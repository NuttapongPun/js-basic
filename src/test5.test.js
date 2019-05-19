const { checkPrime } = require("./test5");

test("checkPrime", () => {
  expect(checkPrime(2)).toBe(true);
  expect(checkPrime(3)).toBe(true);
  expect(checkPrime(23)).toBe(true);
  expect(checkPrime(659)).toBe(true);
  expect(checkPrime(997)).toBe(true);
  expect(checkPrime(1)).toBe(false);
  expect(checkPrime(15)).toBe(false);
  expect(checkPrime(16)).toBe(false);
  expect(checkPrime(100)).toBe(false);
  expect(checkPrime(999)).toBe(false);
});

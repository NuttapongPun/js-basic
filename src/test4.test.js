const { sumAbs, sumSquare, maxAbsSum, sumPositive } = require("./test4");

test("sumSquare", () => {
  expect(sumSquare([1, 2, 3])).toBe(14);
  expect(sumSquare([0, -2, 8])).toBe(68);
});

test("sumAbs", () => {
  expect(sumAbs([])).toBe(0);
  expect(sumAbs([-1, -2, 3])).toBe(6);
  expect(sumAbs([-10, -5, 9])).toBe(24);
  expect(sumAbs([10, 100, 1000])).toBe(1110);
});

test("sumPositive", () => {
  expect(sumPositive([-1, -2, -3])).toBe(0);
  expect(sumPositive([-1, 22, -3])).toBe(22);
  expect(sumPositive([-1, 22, 33])).toBe(55);
  expect(sumPositive([-1, -22, 33])).toBe(33);
  expect(sumPositive([])).toBe(0);
});

test("maxAbsSum", () => {
  expect(maxAbsSum([5, 4, 3, 2, 1], 0)).toBe(0);
  expect(maxAbsSum([5, 4, 3, 2, 1], 3)).toBe(12);
  expect(maxAbsSum([1, 3, 5, -9], 2)).toBe(14);
  expect(maxAbsSum([1, 0, -1, 7], 3)).toBe(9);
  expect(maxAbsSum([10, -9, 8, -7], 1)).toBe(10);
  expect(maxAbsSum([10, -9, 8, -7], 4)).toBe(34);
});

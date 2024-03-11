const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('it returns the string "1,234" when input is: 1234', () => {
    expect(addCommas(1234)).toBe('1,234');
  });
  test('it returns the string "1,000,000" when input is: 1000000', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
  });
  test('it returns the string "9876543210" when input is: 9876543210', () => {
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });
  test('it returns the string "6" when input is: 6', () => {
    expect(addCommas(6)).toBe('6');
  });
  test('it returns the string "-10" when input is: 1234', () => {
    expect(addCommas(-10)).toBe('-10');
  });
  test('it returns the string "-5678" when input is: -5678', () => {
    expect(addCommas(-5678)).toBe('-5,678');
  });
  test('it returns the string "12345.678" when input is: 12,345.678', () => {
    expect(addCommas(12345.678)).toBe('12,345.678');
  });
  test('it returns the string "-3141592.65" when input is: -3141592.65', () => {
    expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
  });
  test('it returns  "NaN" when input is not a number', () => {
    expect(addCommas('abc')).toBe(NaN);
  });
  test('it returns  "0" when input is :0', () => {
    expect(addCommas(0)).toBe('0');
  });
  test('it works on large numbers ', () => {
    expect(addCommas(8888888888888888888888888888888888888)).toBe('8,888,888,888,888,889,000,000,000,000,000,000,000');
  });
});

const { foo, bar } = require('../src/index');

test("test code coverage", () => {
  expect(foo(1)).toBe(1);
});
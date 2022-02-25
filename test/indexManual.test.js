const { foo, bar } = require('../src/index.manual');

test("test code coverage", () => {
  expect(foo(1)).toBe(1);
});

afterAll(() => {
  console.log('state', JSON.stringify(global.___statementCoverage___, null, 2));
  console.log('func', JSON.stringify(global.___functionCoverage___, null, 2));
});

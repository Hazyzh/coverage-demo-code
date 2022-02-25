const { foo } = require('../src/example.js');

describe.each`
  number   |   expected
  ${1}     | ${100}
  ${2}     | ${50}
  ${10}    | ${10}
  ${50}    | ${2}
  ${100}   | ${1}
`('$number', ({number, expected}) => {
  test(`${number} will returns ${expected}`, () => {
    expect(foo(number)).toBe(expected);
  });
});
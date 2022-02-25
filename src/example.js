function foo(x) {
  let y = 0;
  if (x > 0) {
    y = x;
  }
  return 100 / y;
};

module.exports = { foo };
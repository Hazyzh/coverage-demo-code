const foo = (x) => {
  let y = 0;
  if (x > 0) {
    y = x;
  }
  return y;
}

const bar = () => {};

module.exports = { foo, bar };
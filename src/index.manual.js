global.___statementCoverage___ = { 1: 0, 2: 0, 3: 0, 4: 0 };
global.___functionCoverage___ = { 1: 0, 2: 0 };

const foo = (x) => {
  ___functionCoverage___[1]++;

  ___statementCoverage___[1]++;
  let y = 0;
  ___statementCoverage___[2]++;
  if (x > 0) {
    ___statementCoverage___[3]++;
    y = x + y;
  }
  ___statementCoverage___[4]++;
  return y;
}

const bar = () => {
  ___functionCoverage___[2]++;
};

module.exports = { foo, bar };

const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const template = require("@babel/template").default;
const t = require("@babel/types");

const code = fs.readFileSync('./src/example.js', 'utf-8');
// const code = fs.readFileSync('./src/conversationLogHelper.js', 'utf-8');

const ast = parser.parse(code, {sourceType: 'module'});

const isStatement = (path) => {
  const { type } = path;
  return (
      (type.match(/statement$/i) || (type.toLowerCase() === 'variabledeclaration')) &&
      (type.toLowerCase() !== 'blockstatement')
  );
}

const formatLoc = ({ line, column }) => ({
  line, column
})

const coverage = {
  s: {},
  sDetailMap: {
  },
};
let s = 1;

traverse(ast, {
  enter(path) {
    if (!path.node.loc) {
      return;
    }
    if (isStatement(path)) {
      const node = path.node;
      const statementIndex = s++;
      const addAst = template(`
        ___coverage___.s[${statementIndex}]++;
      `)();
      path.insertBefore(addAst);

      coverage.s[statementIndex] = 0;
      coverage.sDetailMap[statementIndex] = {
        start: formatLoc(node.loc.start),
        end:  formatLoc(node.loc.end),
      };
    }
  },
  exit(path) {
    if (path.type === 'Program') {
      path.node.body.unshift(template(`
      global.___coverage___ = COVERAGE
      `)({
          'COVERAGE': t.valueToNode(coverage)
      }));
    }
  }
});

const res = generate(ast).code

fs.writeFileSync('res/babel-coverage-result.js', res, 'utf-8');
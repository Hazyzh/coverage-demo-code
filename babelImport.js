const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const code = fs.readFileSync('./src/babel.import.js', 'utf-8');

const ast = parser.parse(code, {sourceType: 'module'});

traverse(ast, {
  enter(path) {
    if (!path.node.loc) {
      return;
    }
    if (path.isImportDeclaration()) {
      const node = path.node;
      if (node.source.value === '@ringcentral/juno/icon') {
        path.node.specifiers.forEach(specifier => {
          const { imported } = specifier;
          path.insertBefore(
            t.importDeclaration( [specifier], t.stringLiteral(`@ringcentral/juno/icon/${imported.name}`))
          );
        });
        path.remove();
      }
    }
  },
  exit(path) {}
});

const res = generate(ast).code
fs.writeFileSync('res/babel-import-result.js', res, 'utf-8');
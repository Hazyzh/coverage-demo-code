const istanbul = require('istanbul');
const fs = require('fs');
const instrumenter = new istanbul.Instrumenter();

const code = fs.readFileSync('./src/example.js', 'utf-8');
const generatedCode = instrumenter.instrumentSync(code);

fs.writeFileSync('res/istanbul.js', generatedCode)
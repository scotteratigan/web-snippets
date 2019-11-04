const prettier = require('prettier');
const code = '<html></html>';

console.log(prettier(code, { parser: 'html' }));

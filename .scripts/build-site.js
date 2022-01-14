const path = require('path');
const cpy = require('cpy');
const generate = require('./script-merge');

const cwd = path.join(__dirname, '../');
const cpExclude = ['.scripts', '.github', 'node_modules'].map(p => '!' + path.join(__dirname, p));
const cpTo = path.join(__dirname, '../dist');

const PATH_JAVASCRIPT = path.join(cpTo, './javascript/');
const PATH_PLAYGROUND = path.join(cpTo, './playground/');

(async function main() {
  await cpy(['./', ...cpExclude], cpTo, { parents: true, cwd });

  await generate(PATH_JAVASCRIPT);
  await generate(PATH_PLAYGROUND);
})();

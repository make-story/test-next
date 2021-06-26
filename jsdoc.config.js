/**
 * JSDoc
 *
 * 템플릿 : https://github.com/SoftwareBrothers/better-docs
 */
const _ = require('lodash');

// 각 영역 설정
const display = require('./jsdoc/display');

// 쉘 명령에서 '--옵션키'의 '옵션값' 반환
// $ node <실행 파일> --옵션키 옵션값
const getArgv = argv => {
  let value = null;
  if (process.argv.includes(`--${argv}`) && process.argv[process.argv.indexOf(`--${argv}`) + 1]) {
    value = process.argv[process.argv.indexOf(`--${argv}`) + 1];
  }
  return value;
};
console.log(getArgv('page'));

module.exports = _.extend({
  sourceType: 'module',
  recurseDepth: 10,
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure'],
  },
  plugins: [
    'node_modules/jsdoc/plugins/markdown',
    'node_modules/better-docs/component',
    'node_modules/better-docs/typescript',
  ],
  source: {
    include: ['src/display'],
    includePattern: '\\.(js|jsx|ts|tsx)$',
    exclude: ['./public'],
    excludePattern: '(node_modules/|docs)',
  },
  opts: {
    encoding: 'utf8',
    destination: './public/docs',
    template: 'node_modules/better-docs',
    recurse: true,
    verbose: true,
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    search: true,
    'better-docs': {
      name: 'AMORE Documentation',
      title: '', // HTML title
      hideGenerator: false,
      navLinks: [
        {
          label: 'AMORE Mall',
          href: 'https://apmall.com',
        },
      ],
    },
  },
});

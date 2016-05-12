require('babel-register');

const path = require('path');
const co = require('co');
const fs = require('mz/fs');
const mkdirp = require('mkdirp-promise');

const listPaths = require('./list-paths').default;
const render = require('./render').default;

module.exports = function prerender() {
  const paths = listPaths();

  return co(function *() {
    const files = yield paths.map(path => ({
      path, content: render(path)
    }));
    yield files.map(file => {
      // console.log('mkdir', path.join(__dirname, '../dist', file.path));
      return mkdirp(path.join(__dirname, '../dist', file.path));
    });
    yield files.map(file => {
      const filePath = path.join(__dirname, '../dist', file.path, 'index.html');
      // console.log('coucou', filePath);
      return fs.writeFile(filePath, file.content);
    });
  });
};

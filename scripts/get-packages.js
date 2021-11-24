const { readdirSync, existsSync, statSync } = require('fs');
const { join, resolve } = require('path');

/**
 * @param {string} folder
 * @return {string[]}
 */
function getPackages(folder) {
  const path = resolve(__dirname, '..', folder);

  if (!existsSync(path) || !statSync(path).isDirectory()) {
    return [];
  }

  return readdirSync(path)
    .filter(
      packageFolder =>
        !/^node_modules$/i.test(packageFolder) &&
        existsSync(join(path, packageFolder, 'package.json')),
    )
    .map(packageFolder => {
      const packageJSONPath = join(path, packageFolder, 'package.json');
      const pkg = require(packageJSONPath);

      return pkg.name;
    });
}

module.exports = {
  getPackages,
};

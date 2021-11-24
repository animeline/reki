const { exec } = require('./exec');
const { getPackages } = require('./get-packages');

async function buildPackages() {
  const packages = [...getPackages('shared'), ...getPackages('packages')];

  if (!packages.length) {
    throw new Error('No packages found!');
  }

  const packagesScoped = packages
    .map(packageName => `--scope=${packageName}`)
    .join(' ');

  // Clean old build
  await exec(`yarn lerna exec "rimraf build dist typings" ${packagesScoped}`);

  // Build packages
  await exec(`yarn lerna run build ${packagesScoped}`);

  console.log(
    `The package${packages.length > 1 ? 's' : ''} ${packages
      .map(packageName => `"${packageName}"`)
      .join(', ')} was successfully compiled.`,
  );
}

buildPackages();

const { exec } = require('./exec');
const { getPackages } = require('./get-packages');

async function buildApps() {
  const apps = [
    ...getPackages('apps/frontend'),
    ...getPackages('apps/backend'),
  ];

  if (!apps.length) {
    throw new Error('No apps found!');
  }

  const appsScoped = apps.map(appName => `--scope=${appName}`).join(' ');

  // Clean old build
  await exec(`yarn lerna exec "rimraf build dist typings" ${appsScoped}`);

  // Build apps
  await exec(`yarn lerna run build ${appsScoped}`);

  console.log(
    `The app${apps.length > 1 ? 's' : ''} ${apps
      .map(appName => `"${appName}"`)
      .join(', ')} was successfully compiled.`,
  );
}

buildApps();

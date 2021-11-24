const { exec: defaultExec } = require('child_process');

/**
 * @param {string} command
 * @return {Promise<void>}
 */
function exec(command) {
  return new Promise((resolvePromise, reject) => {
    const childProcess = defaultExec(command);

    childProcess.stdout.setEncoding('utf8');
    childProcess.stderr.setEncoding('utf8');

    childProcess.on('error', error => {
      reject(error);
    });

    childProcess.on('close', code => {
      if (code !== 0) {
        process.exit(1);
      }

      resolvePromise(code);
    });

    childProcess.stdout.on('data', data => {
      console.log(data.toString());
    });

    childProcess.stderr.on('data', data => {
      console.log(data.toString());
    });
  });
}

module.exports = {
  exec,
};

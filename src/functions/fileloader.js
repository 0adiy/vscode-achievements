const { glob } = require("glob");
// const promisify = require("util").promisify;

async function loadFiles(dirName) {
  const srcPath = __dirname.replace(/\\/g, "/").replace(/\/[^\/]*$/g, "");
  let Files = await glob(`${srcPath}/${dirName}/**/*.js`);

  // cache busting
  Files.forEach(file => delete require.cache[require.resolve(file)]);
  return Files;
}

module.exports = loadFiles;

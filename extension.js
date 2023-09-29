const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  const achivements = await loadAchievements();

  achivements.forEach(ach => {
    ach.event(ach.run);
  });
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};


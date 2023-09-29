const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");

let isActivated = false;

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // Should only run once
  if (!isActivated) {
    console.log("Achievements is now active!");
    const achivements = await loadAchievements();

    achivements.forEach(ach => {
      ach.event(ach.run);
    });

    isActivated = true;
  }
}

// This method is called when your extension is deactivated
function deactivate() {
  isActivated = false;
}

module.exports = {
  activate,
  deactivate,
};


const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");

let isActivated = false;

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // Should only run once
  if (!isActivated) {
    // Retrieve the array
    context.globalState.update("achivements", []);
    let achList = context.globalState.get("achivements") || [];

    function updateAchList(input) {
      achList.push(input);
      context.globalState.update("achivements", achList);
    }

    console.log("Achievements is now active!");
    const achivements = await loadAchievements();

    for (const ach of achivements) ach(achList, updateAchList);

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


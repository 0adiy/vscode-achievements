const vscode = require("vscode");
const name = "themeChameleon";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration("workbench.colorTheme")) {
      vscode.window.showInformationMessage(
        "🏆Achievement Unlocked🔓: Theme Chameleon!🦎"
      );
      updateAchList(name);
      disposable.dispose();
    }
  });
};

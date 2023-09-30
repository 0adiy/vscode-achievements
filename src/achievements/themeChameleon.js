const vscode = require("vscode");
const name = "themeChameleon";
const title = "Theme Chameleon!🦎";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration("workbench.colorTheme")) {
      vscode.window.showInformationMessage(
        `🏆Achievement Unlocked🔓: ${title}`
      );
      updateAchList([name, title]);
      disposable.dispose();
    }
  });
};

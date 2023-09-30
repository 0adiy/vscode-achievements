const vscode = require("vscode");
const name = "moreThan50extensions";
const title = "Hoarder: You have more than 50 extensions loaded!📝";

module.exports = async (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const dispoable = vscode.workspace.onDidChangeWorkspaceFolders(event => {
    // Get the number of currently loaded extensions
    const numExtensions = vscode.extensions.all.length;

    // Check if the number of extensions is above 50
    if (numExtensions > 50) {
      vscode.window.showInformationMessage(
        `🏆Achievement Unlocked🔓: ${title}`
      );
      updateAchList([name, title]);
      dispoable.dispose();
    }
  });
};

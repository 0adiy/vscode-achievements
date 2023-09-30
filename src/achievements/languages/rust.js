const vscode = require("vscode");
const name = "rust";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "rust") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: Rusty Crab🦀"
    );
    updateAchList(name);
    disposable.dispose();
  });
};

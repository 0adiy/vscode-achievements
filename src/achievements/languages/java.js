const vscode = require("vscode");
const name = "python";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "python") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: Writing in psedocode 🤓"
    );
    updateAchList(name);
    disposable.dispose();
  });
};

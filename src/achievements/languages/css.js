const vscode = require("vscode");
const name = "css";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "css") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: When in doubt, add more padding."
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

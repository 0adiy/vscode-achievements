const vscode = require("vscode");
const name = "js";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "javascript") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: Gonna make new Framework!😈"
    );
    updateAchList(name);
    disposable.dispose();
  });
};

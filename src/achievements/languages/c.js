const vscode = require("vscode");
const name = "c";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "c") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: C-rious Coder, Your Journey with C Begins!😾"
    );
    updateAchList(name);
    disposable.dispose();
  });
};

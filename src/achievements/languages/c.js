const vscode = require("vscode");
const name = "c";
const title = "C-rious Coder, Your Journey with C Begins!😾";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "c") return;
    vscode.window.showInformationMessage(`🏆Achievement Unlocked🔓: ${title}`);
    updateAchList([name, title]);
    disposable.dispose();
  });
};

const vscode = require("vscode");
const name = "html";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "html") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: Building the web, one <div> at a time."
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

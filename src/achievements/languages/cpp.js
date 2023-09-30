const vscode = require("vscode");
const name = "cpp";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "cpp") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: The language that will make you question your life choices."
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

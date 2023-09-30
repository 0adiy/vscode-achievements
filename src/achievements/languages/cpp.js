const vscode = require("vscode");
const name = "cpp";
const title = "The language that will make you question your life choices.";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "cpp") return;
    vscode.window.showInformationMessage(
      `🏆Achievement Unlocked🔓: ${title}`
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

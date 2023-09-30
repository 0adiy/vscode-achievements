const vscode = require("vscode");
const name = "python";
const title = "Writing Pseudocode 🤓";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "python") return;
    vscode.window.showInformationMessage(
      `🏆Achievement Unlocked🔓: ${title}`
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

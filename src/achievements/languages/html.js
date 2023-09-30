const vscode = require("vscode");
const name = "html";
const title = "Building the web, one <div> at a time.";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "html") return;
    vscode.window.showInformationMessage(
      `🏆Achievement Unlocked🔓: ${title}`
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

const vscode = require("vscode");
const name = "rust";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "rust") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: In Rust, we trust. (Unless it's unsafe.)🦀"
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

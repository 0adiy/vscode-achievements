const vscode = require("vscode");
const name = "java";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "java") return;
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: Java, Where 'public static void' are more than just keywords.🍵"
    );
    updateAchList(name);
    disposable.dispose();
  });
};

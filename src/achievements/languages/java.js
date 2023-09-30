const vscode = require("vscode");
const name = "java";
const title = "Java, Where 'public static void' are more than just keywords.🍵";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(doc => {
    if (doc.languageId !== "java") return;
    vscode.window.showInformationMessage(
      `🏆Achievement Unlocked🔓: ${title}`
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

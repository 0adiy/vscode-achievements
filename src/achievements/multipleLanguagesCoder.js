const vscode = require("vscode");
const name = "multipleLanguagesCoder";
const title = "Top 1% Coder📈";

/**
 *
 * @param {vscode.ExtensionContext} context
 * @param {*} achList
 * @param {*} updateAchList
 * @returns
 */
module.exports = (context, achList, updateAchList) => {
  const languageSet = context.globalState.get("languageSet", new Set());
  if (achList.includes(name)) return;

  const disposable = vscode.workspace.onDidOpenTextDocument(document => {
    // Get the language ID of the opened file
    const languageId = document.languageId;
    languageSet.add(languageId);
    if (languageSet.size > 2) {
      vscode.window.showInformationMessage(
        `🏆Achievement Unlocked🔓: ${title}`
      );
      updateAchList([name, title]);
      disposable.dispose();
    }

    // Save the updated set back to globalState
    context.globalState.update("languageSet", languageSet);
  });
};

const vscode = require("vscode");

let uniqueLanguages = new Set();
// TODO: Add universal storage
function updateUniqueLanguages() {
  uniqueLanguages.clear();
  vscode.workspace.textDocuments.forEach(doc => {
    uniqueLanguages.add(doc.languageId);
  });

  if (uniqueLanguages.size >= 10) {
    vscode.window.showInformationMessage(
      "Achievement Unlocked: Multilingual Master!"
    );
  }
}

const name = "languageMaster";
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

  const disposable = vscode.workspace.onDidOpenTextDocument((document) => {
    // Get the language ID of the opened file
    const languageId = document.languageId;
    languageSet.add(languageId);
    if(languageSet.size>2){
      vscode.window.showInformationMessage(
        "🏆Achievement Unlocked🔓: Top 1% Coder📈"
      );
      updateAchList(name);
      disposable.dispose();
    }

    // Save the updated set back to globalState
    context.globalState.update("languageSet", languageSet);
  });
};

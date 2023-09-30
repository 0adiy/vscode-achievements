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

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  updateUniqueLanguages();

  // Listen for document open events to update the unique languages
  const disposable = vscode.workspace.onDidOpenTextDocument(() => {
    updateUniqueLanguages();
  });

  disposable.dispose();
};

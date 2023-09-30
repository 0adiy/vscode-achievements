const vscode = require("vscode");
const name = "IsUserSnippet";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  // Check if user snippets are enabled
  const snippetSuggestions = vscode.workspace
    .getConfiguration("editor")
    .get("snippetSuggestions");

  if (snippetSuggestions) {
    // User snippets are disabled
    vscode.window.showInformationMessage(
      "🏆Achievement Unlocked🔓: First User Snippet!"
    );
    updateAchList(name);
    return;
  }
};

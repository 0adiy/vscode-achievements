const vscode = require("vscode");
const name = "firstTimeDebuggerUse";

module.exports = (achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.debug.onDidStartDebugSession(() => {
    vscode.window.showInformationMessage("First Dive into Debugging!");
    updateAchList(name);
    disposable.dispose();
  });
};

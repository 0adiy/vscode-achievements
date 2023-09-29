const vscode = require("vscode");

const name = "continuous5errors";

module.exports = (achList, updateAchList) => {
  if (achList.includes(name)) return;

  const counter = 0;
  const disposable = vscode.debug.onDidStartDebugSession(() => {
    vscode.window.showInformationMessage("First Dive into Debugging!");
    updateAchList(name);
    disposable.dispose();
  });
};

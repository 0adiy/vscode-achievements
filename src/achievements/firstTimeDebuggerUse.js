const vscode = require("vscode");
const name = "firstTimeDebuggerUse";
const title = "First Dive into Debugging!😉";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  const disposable = vscode.debug.onDidStartDebugSession(() => {
    vscode.window.showInformationMessage(
      `🏆Achievement Unlocked🔓: ${title}`
    );
    updateAchList([name, title]);
    disposable.dispose();
  });
};

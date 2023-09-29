const vscode = require("vscode");

module.exports = {
  name: "firstTimeDebuggerUse",
  event: vscode.debug.onDidStartDebugSession,
  /**
   *
   * @param {vscode.DebugSession} debugSession
   */
  run: async (debugSession) => {
    // Your code to execute when debugging starts
    vscode.window.showInformationMessage("First Dive into Debugging!");
},
};

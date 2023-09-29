const vscode = require("vscode");

module.exports = {
  name: "opened first file",
  event: vscode.workspace.onDidOpenTextDocument,
  /**
   *
   * @param {vscode.TextDocument} document
   */
  run: async document => {
    console.log(document.fileName);
  },
};

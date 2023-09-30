const vscode = require("vscode");

const name = "write1000LinesIn1Hour";

module.exports = async (achList, updateAchList) => {
  if (achList.includes(name)) return;

  let counter = 0;
  const dispoable = vscode.workspace.onDidChangeTextDocument(event => {
    event.contentChanges.forEach(change => {
      if (change.text.includes("\n")) {
        counter++;
      }
      if (counter == 1000) {
        vscode.window.showInformationMessage("🏆Achievement Unlocked🔓: You reached 1000 lines📝");
        updateAchList(name);
        dispoable.dispose();
      }
    });
  });
};

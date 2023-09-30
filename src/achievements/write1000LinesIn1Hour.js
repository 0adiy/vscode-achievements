const vscode = require("vscode");

const name = "write1000LinesIn1Hour";

module.exports = async (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  let list = [];
  const dispoable = vscode.workspace.onDidChangeTextDocument(event => {
    event.contentChanges.forEach(change => {
      if (change.text.includes("\n")) {
        list.push(Date.now());
      }
      const offset = Date.now() - 6 * 1000;
      list = list.filter(x => x > offset);
      if (list.length == 10) {
        vscode.window.showInformationMessage(
          "🏆Achievement Unlocked🔓: You reached 1000 lines📝"
        );
        updateAchList(name);
        dispoable.dispose();
      }
    });
  });
};

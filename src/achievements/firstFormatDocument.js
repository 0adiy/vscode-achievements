const vscode = require("vscode");

const name = "firstFormatDocument";

module.exports = (context, achList, updateAchList) => {
  if (achList.includes(name)) return;

  let formatDocumentUsed = false;

  const disposable = vscode.workspace.onDidChangeTextDocument(event => {
    //@ts-ignore
    if (event.reason === vscode.TextDocumentSaveReason.AfterDelay) {
      // This event is triggered when the document is saved.
      if (!formatDocumentUsed) {
        // "Format Document" has not been used before this save.
        vscode.window.showInformationMessage(
          "You formatted the document for the first time!"
        );
        updateAchList([name, title]);
        formatDocumentUsed = true;
        disposable.dispose();
      }
    }
  });
};

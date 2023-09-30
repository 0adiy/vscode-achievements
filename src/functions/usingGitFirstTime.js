const vscode = require("vscode");
const gitExtension = vscode.extensions.getExtension("vscode.git").exports;

const name = "usingGitFirstTime";

module.exports = async (context, achList, updateAchList) => {
  if (!gitExtension) return;
  if (achList.includes(name)) return;
  
  const git = gitExtension.getAPI(1);
  const dispoable = vscode.workspace.onDidChangeWorkspaceFolders(event => {
    // Get the current workspace
    const workspace = vscode.workspace.workspaceFolders[0].uri.fsPath;

    // Find the repository corresponding to the workspace
    const repo = git.repositories.find(
      repository => repository.rootUri.fsPath === workspace
    );

    if (repo) {
      vscode.window.showInformationMessage(
        "🏆Achievement Unlocked🔓: Version Control📝"
      );
      updateAchList(name);
      dispoable.dispose();
    }
  });
};

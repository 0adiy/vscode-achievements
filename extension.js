const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");
const path = require('path');


let isActivated = false;

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // Should only run once
  if (!isActivated) {
    // Retrieve the array
    context.globalState.update("achivements", []);
    let achList = context.globalState.get("achivements") || [];

    function updateAchList(input) {
      achList.push(input);
      context.globalState.update("achivements", achList);
    }

    console.log("Achievements is now active!");
    const achivements = await loadAchievements();

    for (const ach of achivements) ach(achList, updateAchList);

    // Create a webview panel for the custom HTML
    createWebView();

    isActivated = true;
  }
}

// This method is called when your extension is deactivated
function deactivate() {
  isActivated = false;
}

function createWebView() {
  const panel = vscode.window.createWebviewPanel(
    'customWebView', // Unique identifier
    'Custom Web View', // Title displayed to the user
    vscode.ViewColumn.One, // Editor column to show the webview in
    {
      enableScripts: true, // Enable JavaScript in the webview
    }
  );

  // Get the path to your HTML file
  const onDiskPath = vscode.Uri.file('notifcations.html');
  const htmlContent = onDiskPath.with({ scheme: 'vscode-resource' });

  // Set the HTML content in the webview
  panel.webview.html = `<iframe src="${htmlContent}" width="100%" height="100%"></iframe>`;
}

module.exports = {
  activate,
  deactivate,
};


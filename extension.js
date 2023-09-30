const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");
const getWebView = require("./src/functions/getWebView");

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

    // Create a custom icon for your button (you can use SVG or PNG)
    const customIcon = vscode.Uri.file(
      context.asAbsolutePath("./src/assets/medal.png")
    );
    

    // Create a custom title for your button
    const customTitle = "Achievements";

    // Create a command ID for your button
    const commandId = "extension.achivements";

    // Register a command for your button
    vscode.commands.registerCommand(commandId, () => {
      vscode.window.showInformationMessage(
        "🏆command activated"
      );
      createWebView();
      // Create and add the button to the Activity Bar
      const customButton = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left
      );
      customButton.text = customTitle;
      customButton.tooltip = customTitle;
      customButton.command = commandId;
      // customButton.icon = customIcon;
      // Show the button in the Activity Bar
      customButton.show();
    });

    function updateAchList(input) {
      achList.push(input);
      context.globalState.update("achivements", achList);
    }

    console.log("Achievements is now active!");
    const achivements = await loadAchievements();

    for (const ach of achivements) ach(context, achList, updateAchList);

    // Create a webview panel for the custom HTML

    isActivated = true;
  }
}

// This method is called when your extension is deactivated
function deactivate() {
  isActivated = false;
}

function createWebView() {
  const panel = vscode.window.createWebviewPanel(
    "customWebView", // Unique identifier
    "Custom Web View", // Title displayed to the user
    vscode.ViewColumn.One, // Editor column to show the webview in
    {
      enableScripts: true, // Enable JavaScript in the webview
    }
  );

  // Set the HTML content in the webview
  panel.webview.html = getWebView();
  // panel.webview.html = `<iframe src="${getWebView()}" width="100%" height="100%"></iframe>`;
}

module.exports = {
  activate,
  deactivate,
};

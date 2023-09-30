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
    const commandId = "achievements.details";

    // Loading the webview of details under the activity bar
    vscode.window.registerWebviewViewProvider("details", {
      resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
          enableScripts: true,
        };
        webviewView.webview.html = getWebView();
      },
    });

    function updateAchList(input) {
      achList.push(input);
      context.globalState.update("achivements", achList);
    }

    console.log("Achievements is now active!");
    const achivements = await loadAchievements();

    for (const ach of achivements) ach(context, achList, updateAchList);

    isActivated = true;
  }
}

// This method is called when your extension is deactivated
function deactivate() {
  isActivated = false;
}

module.exports = {
  activate,
  deactivate,
};

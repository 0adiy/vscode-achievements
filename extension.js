const vscode = require("vscode");
const loadAchievements = require("./src/functions/loadAchievements");
const getWebView = require("./src/functions/getWebView");
const { EventEmitter } = require("stream");

const eventEmitter = new EventEmitter();

let isActivated = false;

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
  // Should only run once
  if (!isActivated) {
    // Retrieve the array
    context.globalState.update("achivements", []);
    let achList = context.globalState.get("achivements", []);

    // Loading the webview of details under the activity bar
    vscode.window.registerWebviewViewProvider("details", {
      resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
          enableScripts: true,
        };
        webviewView.webview.html = getWebView(achList);

        eventEmitter.on("achListUpdate", () => {
          webviewView.webview.html = getWebView(achList);
        });
      },
    });

    function updateAchList(input) {
      achList.push(input);
      eventEmitter.emit("achListUpdate");
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

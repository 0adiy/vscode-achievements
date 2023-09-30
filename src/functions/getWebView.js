module.exports =
	function getWebView() {
		return `<html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Custom Notification</title>
                <style>
                    body {
                        font - family: Arial, sans-serif;
                    padding: 20px;
		}

                    h1 {
                        color: #ccb8b8;
		}

                    button {
                        padding: 10px 20px;
                    font-size: 14px;
                    border: none;
                    background-color: #007acc;
                    color: white;
                    cursor: pointer;
		}

                    button:hover {
                        background - color: #005f7d;
		}
                </style>
            </head>

            <body>
                <h1>Your Custom Notification</h1>
                <p>This is a custom notification created using a webview in VS Code.</p>
                <button onclick="dismissNotification()">Dismiss</button>

                <script>
                    function dismissNotification() {
                        // Send a message back to the extension to close the webview
                        vscode.postMessage({ command: "dismissNotification" });
		}
                </script>
            </body>

        </html>`;
	}

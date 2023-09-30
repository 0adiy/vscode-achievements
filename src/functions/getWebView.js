module.exports = function getWebView(achList) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Notification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
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
              background-color: #005f7d;
          }
      </style>
  </head>
  <body>
          ${achList.map(ach => `<div>${ach[1]}</div>`).join("")}
  </body>
  </html>`;
};

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
          .achievement-item {
            list-style-type: circle;
            margin-top: 20px;
          }
      </style>
  </head>
  <body>
  <h3>Your Achievements🏆:</h3>
  ${achList.map(achivementList).join('')}
  </body>
  </html>`;
};

const achivementList = (achievement) => 
`<li class="achievement-item" >
        ${achievement[1]}
</li>`

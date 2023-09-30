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
      <h3>Your Achievements 🏆</h3>
      <ul class="achievement-list" id="achievementList">
          <!-- List items will be dynamically added here -->
      </ul>
  
      <script>
  
          // Get a reference to the ul element
          const achievementList = document.getElementById("achievementList");
  
          // Loop through the achievements array and create li elements
          achList.forEach((achievement) => {
              const li = document.createElement("li");
              li.className = "achievement-item";
  
              const achievementDetails = document.createElement("div");
              achievementDetails.className = "achievement-details";
  
              const h4 = document.createElement("h4");
              h4.textContent = achievement.title;
  
              const p = document.createElement("p");
              p.textContent = achievement.details;
  
              achievementDetails.appendChild(h4);
              achievementDetails.appendChild(p);
  
              li.appendChild(achievementDetails);
              achievementList.appendChild(li);
          });
      </script>
  </body>
  </html>`;
};

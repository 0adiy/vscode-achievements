const loadFiles = require("./fileloader");

async function loadAchievements() {
  const Files = await loadFiles("achievements");
  console.log(Files); //REVIEW - remove this line
  const achievements = [];
  Files.forEach(file => {
    const achievement = require(file);
    achievements.push(achievement);
  });
  return achievements;
}

module.exports = loadAchievements;

require('dotenv/config');
const bigWall = require('./bot/bigWall');

(async () => {
  await bigWall.initialize();

  await bigWall.login(process.env.EMAIL, process.env.PASSWORD);
})();

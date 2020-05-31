require('dotenv/config');
const weatherForecastBot = require('./bot/weatherForecast');
const weatherForecastController = require('./controllers/WeatherForecastController');
var CronJob = require('cron').CronJob;
// const http = require('http');

// http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end();
// }).listen(process.env.PORT || 8080);

(async () => {
  await weatherForecastBot.initialize();

  await weatherForecastBot.login(process.env.USER, process.env.PASSWORD);

  var tweetJob = new CronJob(
    '0 * * * *',
    function () {
      weatherForecastController.getWeatherForecastAndTweet();
    },
    null,
    true,
    'America/Sao_Paulo'
  );
})();

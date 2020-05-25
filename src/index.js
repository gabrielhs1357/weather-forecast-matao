require('dotenv/config');
const weatherForecastBot = require('./bot/weatherForecast');
const weatherForecastController = require('./controllers/WeatherForecastController');
var CronJob = require('cron').CronJob;

(async () => {
  await weatherForecastBot.initialize();

  await weatherForecastBot.login(process.env.USER, process.env.PASSWORD);

  var tweetJob = new CronJob(
    '*/30 * * * *',
    function () {
      weatherForecastController.getWeatherForecastAndTweet();
    },
    null,
    true,
    'America/Sao_Paulo'
  );
})();

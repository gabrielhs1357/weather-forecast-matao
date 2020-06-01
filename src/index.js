require('dotenv/config');
const CronJob = require('cron').CronJob;
const WeatherService = require('./services/WeatherService');

() => {
  new CronJob(
    '0 * * * *',
    function () {
      WeatherService.getCurrentWeatherAndTweet();
    },
    null,
    true,
    'America/Sao_Paulo'
  );
};

require('dotenv/config');
const CronJob = require('cron').CronJob;
const WeatherService = require('./services/WeatherService');

(async () => {
  new CronJob(
    '0 * * * *',
    async () => {
      await WeatherService.getCurrentWeatherAndTweet();
    },
    null,
    true,
    'America/Sao_Paulo'
  );
})();

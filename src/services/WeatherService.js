const axios = require('axios').default;
const moment = require('moment-timezone');
const Twit = require('../bot/Twit');

module.exports = {
  async getCurrentWeatherAndTweet() {
    try {
      const response = (await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=3457509&appid=${process.env.API_KEY}&units=metric&lang=pt_br`)).data;

      const description = response.weather[0].description;
      const temp = response.main.temp;

      const currentWeather = `[${moment().tz('America/Sao_Paulo').format('DD/MM/YY')}, ${moment().tz('America/Sao_Paulo').format('HH:mm')}] ${description.charAt(0).toUpperCase() + description.slice(1)}, ${Math.trunc(temp)} °C`;

      await Twit.tweet(currentWeather);
    } catch (error) {
      console.log('Error on getting current weather:', error);
    }
  }
};

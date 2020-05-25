const axios = require('axios').default;
const weatherForecastBot = require('../bot/weatherForecast');
const moment = require('moment');

module.exports = {
  async getWeatherForecastAndTweet() {
    try {
      const response = (await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=3457509&appid=${process.env.API_KEY}&units=metric&lang=pt_br`)).data;

      const description = response.weather[0].description;
      const temp = response.main.temp;

      let header = `${moment().format('DD/MM/YYYY')}, ${moment().format('HH:mm')} - Matão, SP - ${description.charAt(0).toUpperCase() + description.slice(1)}, ${Math.trunc(temp)} °C`;

      await weatherForecastBot.tweet(header);
    } catch (error) {
      console.log(error);
    }
  }
};

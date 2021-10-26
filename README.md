<p align="center">
   <img src=".github/logo.png" width="200"/>
</p>

# Weather Forecast Matão

[![Author](https://img.shields.io/badge/author-Gabriel%20Silva-4855B7?style=flat-square)](https://github.com/gabrielhs1357)
[![License](https://img.shields.io/github/license/gabrielhs1357/weather-forecast-matao?color=4855B7&style=flat-square)](https://github.com/gabrielhs1357/weather-forecast-matao/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/gabrielhs1357/weather-forecast-matao?color=4855B7&style=flat-square)](https://github.com/gabrielhs1357/weather-forecast-matao/commits/main)

> Don't forget the umbrella anymore!

<p align="center"><img src=".github/weather-forecast-matao.png?raw=true" width="1000"/></p>

---

## :pushpin: Table of Contents

* [Features](#rocket-features)
* [Technologies](#computer-technologies)
* [Getting Started](#construction_worker-getting-started)
* [License](#closed_book-license)

## :rocket: Features

* 🌦 Tweet the current weather by using Twitter and OpenWeather APIs.

## :computer: Technologies

- [Node.js](https://nodejs.org/en), [Cron](https://github.com/kelektiv/node-cron), [Moment Timezone](https://github.com/moment/moment-timezone) and [Twit](https://github.com/ttezel/twit).

## :construction_worker: Getting Started

**First of all, make sure that you have installed [Node.js](https://nodejs.org/en/download/) and [YARN](https://classic.yarnpkg.com/en/docs/install#windows-stable). You need also an API Key of [OpenWeather API](https://openweathermap.org/api) and the API Credentials of [Twitter API](https://developer.twitter.com/en/docs/twitter-api), so you can go ahead with the following steps:**

1. Clone the project:

   ```
   git clone https://github.com/gabrielhs1357/weather-forecast-matao.git
   ```

2. Install the dependencies:

   ```
   yarn
   ```

3. Create a copy of `.env.sample` file and rename it to `.env`.

4. Set up your `.env` file.

- API_KEY: your API Key of [OpenWeather API](https://openweathermap.org/api).
- ACCESS_TOKEN, ACCESS_TOKEN_SECRET, CONSUMER_KEY, CONSUMER_SECRET: these all are the API Credentials of [Twitter API](https://developer.twitter.com/en/docs/twitter-api).

5. Start the application in development environment:

    ```shell
    yarn dev
    ```

## :closed_book: License

This project is under the [MIT license](https://github.com/gabrielhs1357/kennel-manager-system/blob/master/LICENSE).

---

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Made with 💜 by <a href='https://github.com/gabrielhs1357'>Gabriel Silva</a>.</p>

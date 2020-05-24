/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

const bigWall = {
  browser: null,
  page: null,

  initialize: async () => {
    bigWall.browser = await puppeteer.launch({
      headless: false
      // args: ['--start-maximized'],
      // defaultViewport: { width: 1920, height: 1080 }
    });

    bigWall.page = await bigWall.browser.newPage();

    bigWall.page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  },

  login: async (email, password) => {
    await bigWall.page.goto(process.env.LOGIN_URL, {
      waitUntil: 'networkidle2'
    });

    await bigWall.page.evaluate(() => console.log(`url is ${location.href}`));
    await bigWall.page.evaluate(() => console.log('TESTE'));

    //Types the e-mail
    await bigWall.page.type('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(2) > div > label > input', email, { delay: 50 });
    //Types the password
    await bigWall.page.type('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(3) > div > label > input', password, { delay: 50 });
    //Clicks on login button
    await bigWall.page.click('#react-root > section > main > article > div.rgFsT > div:nth-child(1) > div > form > div:nth-child(4) > button > div');

    //Closes the browser
    await bigWall.browser.close();
  }
};

module.exports = bigWall;

const puppeteer = require('puppeteer');

const weatherForecast = {
  browser: null,
  page: null,

  initialize: async () => {
    weatherForecast.browser = await puppeteer.launch({
      headless: true,
      args: ['--start-maximized', '--no-sandbox'],
      defaultViewport: { width: 1920, height: 1080 }
    });

    weatherForecast.page = await weatherForecast.browser.newPage();

    // weatherForecast.page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  },

  loginVerify: async () => {
    //Types the phone number
    await weatherForecast.page.type('#challenge_response', process.env.PHONE_NUMBER);
    //Types on "Submit" button
    await weatherForecast.page.click('#email_challenge_submit');
  },

  login: async (user, password) => {
    await weatherForecast.page.goto(process.env.LOGIN_URL, {
      waitUntil: 'networkidle2'
    });

    // await weatherForecast.page.evaluate(() => console.log(`url is ${location.href}`));

    //Types the user
    await weatherForecast.page.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(6) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input', user);
    //Types the password
    await weatherForecast.page.type('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(7) > label > div > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input', password);
    //Clicks on login button  
    await weatherForecast.page.click('#react-root > div > div > div.css-1dbjc4n.r-13qz1uu.r-417010 > main > div > div > form > div > div:nth-child(8) > div > div');

    await weatherForecast.page.waitFor(1000); // Waits for 1000ms

    if (weatherForecast.page.url().split('?')[0] === 'https://twitter.com/account/login_challenge') await weatherForecast.loginVerify();

    await weatherForecast.page.waitFor(1000); // Waits for 1000ms
  },

  tweet: async (message) => {

    //Clicks on "Tweet"
    await weatherForecast.page.click('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div.css-1dbjc4n.r-1habvwh > div.css-1dbjc4n.r-vpgt9t.r-e7q0ms > a > div');

    await weatherForecast.page.waitFor(1000); // Waits for 1000ms

    //Types the message
    await weatherForecast.page.type('#react-root > div > div > div.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-t23y2h.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div:nth-child(1) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t', message, { delay: 50 });

    //Clicks on "Tweet" button
    await weatherForecast.page.click('#react-root > div > div > div.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af.r-184en5c > div:nth-child(2) > div > div > div > div.css-1dbjc4n.r-1habvwh.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-t23y2h.r-1wbh5a2.r-rsyp9y.r-1pjcn9w.r-htvplk.r-1udh08x.r-1potc6q > div > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > div > div:nth-child(1) > div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr > div');
  }
};

module.exports = weatherForecast;

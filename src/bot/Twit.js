var Twit = require('twit');

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports = {
  tweet: (message) => {
    T.post('statuses/update', { status: message }, function (err, data, response) {
      if (err) return console.log('Error:', err);
      return console.log('Success:', data);
      // if (response) console.log('Response:', response);
    });
  }
};

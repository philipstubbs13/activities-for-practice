//Twitter user stories
//As a user, I want to post tweet to share my thoughts with others.
//As a user, I want to retweet someone else's post so that my followers can see that tweet.
//As a user, I want to click a hashtag so that I can see all tweets related to that hashtag.


var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://www.espn.com/")
  .click("#global-search-trigger")
  .type(".search box", "basketball")
  .click(".btn-search")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });

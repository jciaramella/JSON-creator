const yelpAPI = require("yelp-api");
const apiKey =
  "6GwF55WvV4NKfSLm9mM33DKY2FUtnoMkpwfJjV75uARAvelRO3WOJG9yg8zUQPxi6fNGdVHIwFk7-aoRAW7p0qQ9mYLsnjYmF8IybrzbruGPdos5aeDvGszzTOXiWnYx";
const fs = require("fs");
const PT = require("promise-timeout");

const yelp = new yelpAPI(apiKey);

let params = [{ location: "Manchester" }, { limit: 50 }, { offset: 100 }];

yelp
  .query("businesses/search", params)
  .then(data => {
    fs.appendFile(`./data-sets/restaurants.json`, data, err => {
      console.log("File has been saved");
    });
  })
  .catch(err => {
    console.log(err);
  });

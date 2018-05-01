const fs = require("fs");

const file = "./data-sets/restaurants.json";

fs.readFile(file, (err, data) => {
  const content = JSON.parse(data);
  const restaurants = content.businesses;
  const rest_list = restaurants.map(restaurant => {
    return restaurant.name;
  });
  console.log(rest_list);
});

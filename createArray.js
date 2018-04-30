const fs = require('fs')

const restaurantsArray = []
    fs.readFile(`./data-sets/restaurants.json`, (err, data) => {
        restaurantsArray.push(JSON.parse(data))
    })

console.log(restaurantsArray)
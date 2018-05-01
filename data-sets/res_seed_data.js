const fs = require('fs-extra')

const restaurantsArray = []
fs.readJson(`./restaurants.json`)
    .then(data => {
        return data
    })
    .then(resData => {
        const sqlInsert = "INSERT INTO restaurants (restaurant_name, restaurant_address, restaurant_phone, restaurant_URL, restaurant_longitude, restaurant_latitude, restaurant_price) VALUES"
        let sqlValues = ""

        for(let i = 0; i < resData.businesses.length; i++){
            const {name, phone, url, coordinates, price, location} = resData.businesses[i]
            sqlValues += `('${name}','${location.display_address}','${phone}','${url}','${coordinates.longitude}','${coordinates.latitude}', '${price}'),`
        }
        return sqlInsert + sqlValues
    })
    .then(sqlData => {
        fs.writeFile('./sql-data-restaurants.txt', sqlData)
    })

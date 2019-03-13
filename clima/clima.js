const axios = require('axios');

const getWeather = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7406119d3ced6bd0c56dd332204b4ded&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}
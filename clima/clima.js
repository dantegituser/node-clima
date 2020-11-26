const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=803b00f64bc6b723ec932ae4c6e295f1&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};
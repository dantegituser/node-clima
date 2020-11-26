const axios = require('axios');

const getLugarLatLong = async(dir) => {
    let key = '803b00f64bc6b723ec932ae4c6e295f1';
    const city = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=803b00f64bc6b723ec932ae4c6e295f1`
    });

    const resp = await instance.get();
    if (!resp.data.coord) {
        throw new Error(`No hay recultados apra ${ciudad}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lon;
    const long = data.coord.lat;

    return {
        direccion,
        lat,
        long
    };
};

module.exports = {
    getLugarLatLong
};
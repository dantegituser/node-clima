const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.long);

        return `El clima de ${coords.direccion} es de ${temp} grados`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
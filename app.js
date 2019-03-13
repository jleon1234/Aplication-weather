
const place = require('./lugar/lugar'); 
const weather = require('./clima/clima');

const argv = require('yargs')
            .options({
                direction: {
                    alias: 'd',
                    desc: 'Direction of the city to get the weather'
                }
            })
            .argv

// weather.getWeather( -0.190000, -78.500000)
// .then(console.log)
const getInfo = async ( direction) => {
    try {
        const coords = await place.getPlaceLatLng( direction );
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return ` The Weather of ${ coords.direction } is ${ temp }`; 
    } catch (e) {
        return `The Weather of ${ direction } could not be determined` 
    }
}

getInfo(argv.direction)
    .then( console.log )
    .catch( console.log );
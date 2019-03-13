const axios = require('axios');

const getPlaceLatLng = async( dir ) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': 'ef6de69b1amsh3c2b0f7e70f3323p178588jsn69ae1a7767b1'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No found resutls for ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const direction = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direction,
        lat,
        lng
    }

}
module.exports = {
    getPlaceLatLng
}




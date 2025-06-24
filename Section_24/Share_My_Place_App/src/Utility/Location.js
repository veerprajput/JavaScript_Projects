/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
const GOOGLEAPIKEY = 'AIzaSyCWMcGdRjiFeTTWyl9G5DzH7mhW3zZjp7Y';
export async function getCoordsFromAddress(address) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GOOGLEAPIKEY}`);
    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }

    const coordinates = data.results[0].geometry.location;
    return coordinates;
}

export async function getAddressFromCoords(coords) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat}, ${coords.lng}&key=${GOOGLEAPIKEY}`);
    const data = await response.json();
    if (data.error_message) {
        throw new Error(data.error_message);
    }
    return data.results[0].formatted_address;
}

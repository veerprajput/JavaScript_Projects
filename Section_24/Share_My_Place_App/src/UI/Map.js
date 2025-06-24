/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
export class Map {
    constructor(coordinates) {
        this.render(coordinates);
    }

    render(coordinates) {
        if (!google) {
            alert('You do not have access to Google Maps');
            return;
        }
        // eslint-disable-next-line max-len
        const map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 16,
        });
        new google.maps.Marker({
            position: coordinates,
            map: map,
        });
    }
}

import React, { useEffect } from 'react';
import Leaflet from 'leaflet';
import './Map.scss';

const Map = () => {

    const ACCESS_TOKEN = 'pk.eyJ1Ijoic3RlcGhlbm1pZ3VlbGR1ZW5hcyIsImEiOiJja2p2OG5yNTkxemZnMnpwNWV0cThrM2o3In0.yszjkHaWr_Wau66qSXrniQ';
    const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    const ID = 'mapbox/streets-v11';

    useEffect(() => {

        const mymap = Leaflet.map('mapid').setView([14.5818, 121.076], 13);

        Leaflet.tileLayer(
            `https://api.mapbox.com/styles/v1/${ID}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`,
            {
                attribution: ATTRIBUTION,
                maxZoom: 18,
                id: ID,
                tileSize: 512,
                zoomOffset: -1,
                accessToken: ACCESS_TOKEN
            }
        ).addTo(mymap);

        Leaflet.marker([14.5818, 121.076]).addTo(mymap);
    }, []);

    
    return (<div id="mapid"></div>);
};

export default Map;

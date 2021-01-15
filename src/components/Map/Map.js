import React, { useState, useEffect } from 'react';
import Leaflet from 'leaflet';
import './Map.scss';

const Map = ({geolocation}) => {

    const {latitude, longitude} = geolocation;
    const ACCESS_TOKEN = 'pk.eyJ1Ijoic3RlcGhlbm1pZ3VlbGR1ZW5hcyIsImEiOiJja2p2OG5yNTkxemZnMnpwNWV0cThrM2o3In0.yszjkHaWr_Wau66qSXrniQ';
    const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    const ID = 'mapbox/streets-v11';
    const [my_map, setMyMap] = useState(null);

    useEffect(() => {
        setMyMap(Leaflet.map('mapid'));
    }, []);
    
    useEffect(() => {
        const MILLISECONDS = 500;
        const TIMEOUT_ID = setTimeout(() => {
            if (my_map === null) {
                return;
            }
            my_map.setView([latitude, longitude], 13);
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
            ).addTo(my_map);
            Leaflet.marker([latitude, longitude]).addTo(my_map);
        }, MILLISECONDS);

        return () => {
            clearTimeout(TIMEOUT_ID)
        };

    }, [latitude, longitude, my_map]);
    
    return (<div id="mapid"></div>);
};

export default Map;

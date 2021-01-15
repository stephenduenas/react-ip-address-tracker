import React, { useState } from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import Information from './Information/Information';
import Attribution from './Attribution/Attribution';

const App = () => {

    const [geolocation, setGeolocation] = useState({
        ip_address: '',
        location: '',
        time_zone: '',
        isp: '',
        latitude: 0,
        longitude: 0,
    });

    return (
        <React.Fragment>
            <Header setGeolocation={setGeolocation}/>
            <Information geolocation={geolocation}/>
            <Map geolocation={geolocation}/>
            <Attribution/>
        </React.Fragment>
    );
};

export default App;

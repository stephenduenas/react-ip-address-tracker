import React from 'react';
import Header from './Header/Header';
import Map from './Map/Map';
import Information from './Information/Information';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Information/>
            <Map/>
        </React.Fragment>
    );
};

export default App;

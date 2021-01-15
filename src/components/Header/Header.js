import React from 'react';
import Form from '../Form/Form';
import './Header.scss';

const Header = ({setGeolocation}) => {
    return (
        <header className="banner">
            <h1 className="heading--1">IP Address Tracker</h1>
            <Form setGeolocation={setGeolocation}/>
        </header>
    );
};

export default Header;

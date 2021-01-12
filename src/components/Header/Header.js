import React from 'react';
import './Header.scss';
import Form from '../Form/Form';

const Header = () => {
    return (
        <header className="banner">
            <h1 className="heading--1">IP Address Tracker</h1>
            <Form/>
        </header>
    );
};

export default Header;

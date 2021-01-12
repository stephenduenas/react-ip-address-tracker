import React from 'react';
import Arrow from '../../images/icon-arrow.svg';
import './Form.scss';

const Form = () => {
    return (
        <form className="form" method="POST">
            <div className="form__group">
                <label for="ip_address">IP Address</label>
                <input id="ip_address" name="ip_address" placeholder="Search for any IP address or domain" type="text"></input>
                <button type="button">
                    <img src={Arrow} alt="arrow icon"></img>
                </button>
            </div>
        </form>
    );
};

export default Form;

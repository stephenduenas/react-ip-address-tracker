import React, { useState, useEffect }from 'react';
import { getIpAddress } from '../../api/ipify';

import Arrow from '../../images/icon-arrow.svg';
import './Form.scss';

const Form = ({setGeolocation}) => {
    
    const [input_ip_address, setInputIpAddress] = useState('');

    const [old_input_ip_address, setOldInputIpAddress] = useState('');

    const [prevent_click, setPreventClick] = useState(false);

    useEffect(() => {
        (async function() {
            setInputIpAddress(await setGeolocationInfo());
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFormSubmit = async e => {
        e.preventDefault();
        if(isIpAddressValid() && old_input_ip_address !== input_ip_address && prevent_click === false) { 
            setPreventClick(true);
            await setGeolocationInfo(input_ip_address);
            setOldInputIpAddress(input_ip_address);
            setPreventClick(false);
        }
    };

    const setGeolocationInfo = async (ip_address = '') => {
        const result = await getIpAddress(ip_address);
        if (result === false) {
            return;
        }
        const {as, ip, location, isp} = result;
        const {city, region, postalCode, timezone, lat, lng} = location;
        const LOCATION = `${city}, ${region} ${postalCode}`;
        const TIME_ZONE = `UTC ${timezone}`;
        setGeolocation({
            ip_address: ip,
            location: LOCATION,
            time_zone: TIME_ZONE,
            isp: !as ? isp : as.name,
            latitude: lat,
            longitude: lng
        });
        return ip;
    };

    function isIpAddressValid() {
        const IP_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (IP_ADDRESS_REGEX.test(input_ip_address)) {
            return true;
        }
        alert('Invalid IP Address');
        return false;
    };

    return (
        <form className="form" method="POST" onSubmit={handleFormSubmit}>
            <div className="form__group">
                <label htmlFor="ip_address">IP Address</label>
                <input
                    id="ip_address"
                    name="ip_address"
                    placeholder="Search for any IP address or domain"
                    type="text"
                    value={input_ip_address}
                    onChange={e => setInputIpAddress(e.target.value)}
                ></input>
                <button type="submit">
                    <img src={Arrow} alt="arrow icon"></img>
                </button>
            </div>
        </form>
    );
};

export default Form;

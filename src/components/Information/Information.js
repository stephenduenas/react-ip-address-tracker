import React from 'react';
import './Information.scss';

const Information = ({geolocation}) => {

    const {ip_address, location, time_zone, isp} = geolocation;

    const INFORMATION_DETAILS = {
        'Ip Address': ip_address,
        'Location': location,
        'Timezone': time_zone,
        'Isp': isp
    };

    const information_details_el = Object.keys(INFORMATION_DETAILS).map((key) => {
        return (
            <div className="information__detail" key={key}>
                <h2 className="information__detail__title">{key}</h2>
                <p className="information__detail__description">{INFORMATION_DETAILS[key]}</p>
            </div>
        );
    });
       
    return (
        <div className="information">
            {information_details_el}
        </div>
    );

};

export default Information;

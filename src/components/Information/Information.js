import React from 'react';
import './Information.scss';

const Information = () => {

    return (
        <div className="information">
            <div className="information__detail">
                <h2 className="information__detail__title">Ip Address</h2>
                <p className="information__detail__description">0</p>
            </div>
            <div className="information__detail">
                <h2 className="information__detail__title">Location</h2>
                <p className="information__detail__description">Brooklyn</p>
            </div>
            <div className="information__detail">
                <h2 className="information__detail__title">Timezone</h2>
                <p className="information__detail__description">UTC -05:00</p>
            </div>
            <div className="information__detail">
                <h2 className="information__detail__title">Isp</h2>
                <p className="information__detail__description">SpaceX Starlink</p>
            </div>
        </div>
    );

};

export default Information;

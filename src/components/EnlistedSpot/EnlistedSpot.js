import React from 'react';
import './EnlistedSpot.css';

const EnlistedSpot = (props) => {
    const { selectedSpot } = props;
    // console.log(spot);
    return (
        <div>
            <h5>{selectedSpot.spot}</h5>
        </div>
    );
};

export default EnlistedSpot;
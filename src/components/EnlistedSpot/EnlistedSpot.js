import React from 'react';
import './EnlistedSpot.css';

const EnlistedSpot = (props) => {
    // destructuring
    const { spot } = props.selectedSpot;
    return (
        // selected spot is displayed in UI
        <div className="selected-spot">
            <img src={props.selectedSpot.image} alt="" />
            <h5>{spot}</h5>
        </div>
    );
};

export default EnlistedSpot;
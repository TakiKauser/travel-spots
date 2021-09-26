import React from 'react';
import './EnlistedSpot.css';

const EnlistedSpot = (props) => {
    // destructuring
    const { spot } = props.selectedSpot;
    return (
        <div className="selected-spot">
            <h5>{spot}</h5>
        </div>
    );
};

export default EnlistedSpot;
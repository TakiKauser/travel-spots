import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Place.css';

const Place = (props) => {
    // destructuring properties
    const { spot, image, distance, cost, category, location, division } = props.spot;
    return (
        <div className="spot-card" style={{ width: '20rem' }}>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{spot}</h3>
                <h5>{location}, {division}</h5>
                <p>Distance from Dhaka: {distance}(km)</p>
                <p>Category: {category}</p>
                <h3>Cost: {cost}</h3>
                <button
                    className="add-to-list-btn"
                    onClick={() => props.handleSpotList(props.spot)}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to List
                </button>
            </div>
        </div>
    );
};

export default Place;
import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    // useState
    const [spots, setSpots] = useState([]);
    const [enlistedSpot, setEnlistedSpot] = useState([]);
    // fetch data inside useEffect
    useEffect(() => {
        fetch("./customDB.JSON")
            .then(response => response.json())
            .then(jsonData => setSpots(jsonData))
    }, []);
    // onclick handler
    const handleSpotList = (spot) => {
        const spotList = [...enlistedSpot, spot];
        setEnlistedSpot(spotList);
    }

    return (
        <div className="places-container">
            <div className="place-container">
                {
                    spots.map(spot => <Place
                        key={spot.key}
                        spot={spot}
                        handleSpotList={handleSpotList}
                    />)
                }
            </div>
            <div className="spot-list-container">
                <List
                    enlistedSpot={enlistedSpot}
                />
            </div>
        </div>
    );
};

export default Places;
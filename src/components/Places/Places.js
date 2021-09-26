import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [spots, setSpots] = useState([]);
    const [enlistedSpot, setEnlistedSpot] = useState([]);

    useEffect(() => {
        fetch("./customDB.JSON")
            .then(response => response.json())
            .then(jsonData => setSpots(jsonData))
    }, []);

    const handleSpotList = (spot) => {
        // console.log(spot.spot);
        const spotList = [...enlistedSpot, spot];
        setEnlistedSpot(spotList);
    }

    return (
        <div className="places-container">
            <div className="place-container">
                {/* <h3>Places: {spots.length}</h3> */}
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
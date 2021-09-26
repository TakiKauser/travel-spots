import React from 'react';
import EnlistedSpot from '../EnlistedSpot/EnlistedSpot';
import './List.css';

const List = (props) => {
    const { enlistedSpot } = props;
    // console.log(props);

    let totalCost = 0;
    for (const selectedSpot of enlistedSpot) {
        totalCost += selectedSpot.cost;
    }

    return (
        <div className="list">
            <h2>Selected Spots: {enlistedSpot.length}</h2>
            <h4>Spot List</h4>
            {
                enlistedSpot.map(selectedSpot => <EnlistedSpot
                    key={selectedSpot.key}
                    selectedSpot={selectedSpot}
                />)
            }
            <h3>Travel Expense: ${totalCost}</h3>
        </div>
    );
};

export default List;
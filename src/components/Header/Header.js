import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Make a list to Visit Places</h2>
            <h4>Travelling isn't free. Let's make a plan to calculate your cost according to your budget.</h4>
            <h2>Total Budget: <span>20K</span>!</h2>
        </div>
    );
};

export default Header;
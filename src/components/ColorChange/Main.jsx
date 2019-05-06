import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.less';

function ColorChange(props) {
    return (
        <div className="cc">
            <Header/>
        </div>
    );
}

function Header(props) {
    return (
        <ul className="nav">
            <NavLink to="/hsl/10/90/50">Red</NavLink>
            <NavLink to="/hsl/120/100/40">Green</NavLink>
            <NavLink to="/rgb/33/150/243">Blue</NavLink>
            <NavLink to="/rgb/240/98/146">Pink</NavLink>
        </ul>
    )
}

export default ColorChange;
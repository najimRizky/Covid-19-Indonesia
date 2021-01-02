import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navstyle = {
        color:"white",
        textDecorationLine: 'none',
        cursor: 'normal'
    }
    
    return (
        <div className="navigasi">
            <div className="pageTitle">
                <h3>Covid-19 Indonesia</h3>
            </div>
            <ul>
                <Link to="/" style={navstyle}>
                    <li>Home</li>
                </Link>
                <Link style={navstyle} to="/about">
                    <li >About</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
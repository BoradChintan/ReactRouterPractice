import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Header() {
    const linkstyle = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        textDecoration: 'none',
        margin: '0 15px',
    });

    return (
        <header style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f1f1f1' }}>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
                    <li><NavLink to="/" style={linkstyle} end>Home</NavLink></li>
                    <li><NavLink to="/about" style={linkstyle}>About</NavLink></li>
                    <li><NavLink to="/contact" style={linkstyle}>Contact</NavLink></li>
                </ul>
            </nav>


        </header>
    );

}

export default Header

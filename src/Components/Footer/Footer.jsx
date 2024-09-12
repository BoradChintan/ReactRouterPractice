import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#e0e0e0', marginTop: '4rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                &copy; {new Date().getFullYear()} My Themed App. All rights reserved.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1.25rem' }}>
                <NavLink
                    to="/terms"
                    style={{ color: 'black', textDecoration: 'none' }}
                    activeStyle={{ textDecoration: 'underline' }}
                >
                    Terms of Service
                </NavLink>
                <NavLink
                    to="/privacy"
                    style={{ color: 'black', textDecoration: 'none' }}
                    activeStyle={{ textDecoration: 'underline' }}
                >
                    Privacy Policy
                </NavLink>
                <NavLink
                    to="/contact"
                    style={{ color: 'black', textDecoration: 'none' }}
                    activeStyle={{ textDecoration: 'underline' }}
                >
                    Contact Us
                </NavLink>
            </div>
        </footer>
    );
}

export default Footer

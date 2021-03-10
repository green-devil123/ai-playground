import React from 'react'
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>AI playground</h3>
            </div>
            <div className="menu">
                <ul>
                    <li>Learn AI</li>
                    <li>Docs</li>
                    <li className="profile"><Avatar/>Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Header

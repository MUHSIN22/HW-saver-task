import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="link-active">Posts</Link></li>
                <li><Link to="/">Albums</Link></li>
                <li><Link to="/">Images</Link></li>
            </ul>
        </nav>
    )
}

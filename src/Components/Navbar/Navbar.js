import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    const history = useHistory()
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="link-active">Posts</Link></li>
                <li><Link to="/albums" onClick={()=>history.push('/albums')}>Albums</Link></li>
                <li><Link to="/images">Images</Link></li>
            </ul>
        </nav>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Components/Logout';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/Users">Home</Link>
            </li>
            <li>
                <Link to="/UserDetail/4">User Detail</Link>
            </li>
        </ul>
        <ul>
            <li><Logout /> </li>
        </ul>

    </nav>
);

export default NavBar;
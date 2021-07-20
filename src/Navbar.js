import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav id='navbar'>
            <ul>
                <li className='navbar-elements'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navbar-elements'>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

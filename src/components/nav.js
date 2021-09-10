import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {

    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default NavBar;
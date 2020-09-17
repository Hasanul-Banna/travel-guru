import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar fixed-top container">
            <img src={logo} alt="" />
            <nav>
                <ul className="pt-4">
                    <li><input type="text" name="" id="" placeholder=" &#128269; Search your destination"/></li>
                    <li><Link to="/home" style={{color:'white'}}>Home</Link></li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li><Button variant="warning">Log in</Button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
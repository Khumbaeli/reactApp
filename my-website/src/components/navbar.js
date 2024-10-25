import React, {useState} from 'react';
import './navbar.css';
import logo from '../assets/Pictures/Yosemite National Park.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo'/>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Pictures</Link>
                <Link className='desktopMenuListItem'>Climbing</Link>
            </div>
        </nav>
    )
}

export default Navbar;

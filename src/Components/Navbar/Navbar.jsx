import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [navHeight, setNavHeight] = useState(false);
    const navigate = useNavigate();

    const gotoHome = () => {
        setNavHeight(false); // Close the navbar when navigating to Home
        navigate('/');
    };

    const closeNav = () => {
        setNavHeight(false); // Close the navbar when a menu item is clicked
    };

    return (
        <>
            <nav className={navHeight ? "show nav" : "nav"}>
                <div className="logo" onClick={gotoHome}>HAMZA ASSOCIATES</div>
                <ul>
                    <li>
                        <Link to="/home" onClick={closeNav}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" onClick={closeNav}>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/villas" onClick={closeNav}>VILLAS</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeNav}>CONTACT</Link>
                    </li>
                </ul>
                <RxHamburgerMenu className='hamburger' onClick={() => setNavHeight(!navHeight)} />
            </nav>
        </>
    );
};

export default Navbar

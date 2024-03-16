import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { FaCopyright } from "react-icons/fa";



const Footer = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    return (
        <>
            <footer className={isHomePage ? 'homePage_footer otherPage_footer' : "otherPage_footer"}>
                <div className="container">
                    <h4>HAMZA ASSOCIATES</h4>
                    <p>Escape to Luxury: Your Perfect Villa Awaits. Book Now for Unforgettable Getaways!</p>
                    <ul>
                        <li>
                            <Link to={'/home'}>HOME</Link>
                        </li>
                        <li>
                            <Link to={'/aboutus'}>ABOUT US</Link>
                        </li>
                        <li>
                            <Link to={'/villas'}>VILLAS</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h4>GET IN TOUCH</h4>
                    <p>
                        +92 3323188195</p>
                    <p>hamzahussain0504@gmail.com</p>
                    <span>
                        <FaCopyright />
                        &nbsp;Copyright2024 | HAMZA ASSOCIATES
                    </span>
                </div>



            </footer>
        </>
    )
}

export default Footer

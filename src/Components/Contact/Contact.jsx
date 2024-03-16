import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
            <section id='contact'>
                <h1>CONTACT US</h1>
                <p>Have a question or need assistance? We're here to help! Reach out to us for any inquiries regarding villa rentals, booking assistance, or special requests. Our friendly team is dedicated to ensuring your experience with us is seamless and enjoyable. Contact us today and let us turn your vacation dreams into reality!</p>

                <div className="container">
                    <img src="/about.jpg" alt="about" data-aos="fade-down" data-aos-duration="1000"
                        data-aos-easing="ease-in-out" />
                    <div className="content">
                        <h3>Let's Connect</h3>
                        <div>
                            <p>Phone:</p>
                            <span>+92 3323188195</span>
                        </div>
                        <div>
                            <p>Email:</p>
                            <span>hamzahussain0504@gmail.com</span>
                        </div>
                        <div>
                            <p>Address:</p>
                            <span>House No.233 block 11</span>
                        </div>
                        <ul>
                            <Link to={'/'} target='_blank'    ><FaFacebookSquare /></Link>
                            <Link to={'/'} target='_blank'><FaXTwitter /></Link>
                            <Link to={'/'} target='_blank'><MdEmail /></Link>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact

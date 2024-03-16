import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
    return (
        <>
            <section id='contact_Mini'>
                <div className="super_container">
                    <div className="container_1">
                        <h3>Let's Connect</h3>
                        <div>
                            <p>Phone</p>
                            <span>+92 3323188195</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>hamzahussain0504@gmail.com</span>
                        </div>
                        <div>
                            <p>Addres</p>
                            <span>House No.233 block 11</span>
                        </div>
                        <ul>
                            <Link to={'/'} target='_blank'    ><FaFacebookSquare /></Link>
                            <Link to={'/'} target='_blank'><FaXTwitter /></Link>
                            <Link to={'/'} target='_blank'><MdEmail /></Link>
                        </ul>
                    </div>
                    <div className="container_2">
                        <h3>WE'D LOVE TO HEAR FROM YOU</h3>
                        <form>
                            <div className="div">
                                <input type="text" placeholder='Enter Your Name' />
                                <input type="email" placeholder='Enter Your Email' />
                            </div>
                            <textarea rows="4" placeholder='Your Feedback...'></textarea>
                            <button type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Contact

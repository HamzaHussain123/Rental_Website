import React from 'react'
import About from '../../SubComponents/About'

const AboutUs = () => {
    return (
        <>
            <section id='aboutPage' className='page'>
                <div className="container">
                    <img src="/about.jpg" alt="about" data-aos="fade-right" data-aos-duration="1300"
                        data-aos-easing="ease-in-out" />
                    <div className="content">
                        <h3>Your peace of mind, Our Priority</h3>
                        <p>Welcome to our Villa rental paradise, where every stay is a story waiting to be told. We offer handpicked villas in stunning locations worldwide, from mountains to coastlines. Each villa meets the highest standards of comfort and luxury, catering to all types of travelers.

                            Our user-friendly website makes planning your dream vacation effortless with detailed descriptions, high-resolution images, and transparent pricing. Personalized service sets us apart—we're here to assist you every step of the way.

                            Join our community of travelers who trust us for unforgettable villa experiences. Whether it's relaxation, adventure, or a blend of both, let us guide you to the perfect getaway. Start planning your dream vacation with us today!</p>
                    </div>
                </div>
                <About />

            </section>
        </>
    )
}

export default AboutUs

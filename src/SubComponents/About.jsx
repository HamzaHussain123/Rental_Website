import React from 'react'

const About = () => {
    return (
        <>
            <section id='aboutUs_Mini'>
                <div className="first_container">
                    <div className="content">
                        <h1>ABOUT US</h1>
                        <p>Welcome to Our Villa Haven: Where Memories Are Made and Adventures Begin!We're Passionate About Crafting Unforgettable Getaways. With Carefully Curated Villas and Personalized Service, We Ensure Every Stay Is Extraordinary. Join Our Community of Travelers and Experience Hospitality Redefined. Let Us Be Your Gateway to Dreamy Destinations!</p>

                    </div>
                    <button>We strive to offer you best possible homes to stay!!</button>
                </div>
                <div className="second_container">
                    <div className="image_1">
                        <img src="/people.jpg" alt="people" data-aos="fade-left" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                    </div>
                    <div className="image_2">
                        <img src="/people2.jpg" alt="people2" data-aos="fade-left" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About

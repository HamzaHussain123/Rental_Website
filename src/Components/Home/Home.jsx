import React from 'react'
import HeroSection from '../../SubComponents/HeroSecton.jsx'
import TopVillas from '../../SubComponents/TopVillas.jsx'
import Regions from '../../SubComponents/Regions.jsx'
import OurSpecialities from '../../SubComponents/OurSpecialities.jsx'
import Host from '../../SubComponents/Host.jsx'
import About from '../../SubComponents/About.jsx'
import Contact from '../../SubComponents/Contact.jsx'
const Home = () => {
    return (
        <>
            <article className='page'>
                <HeroSection />
                <TopVillas />
                <Regions />
                <OurSpecialities />
                <Host />
                <About />
                <Contact />
            </article>


        </>
    )
}

export default Home

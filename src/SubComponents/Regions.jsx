import React from 'react'

const Regions = () => {
    return (
        <>
            <section id='regions'>
                <h1>OUR REGIONS</h1>
                <p>Embrace the Majestic Heights or Dive into Serene Coastlines: Discover Our Two Captivating Regions!</p>


                <div className="region_container">
                    <div className="card">
                        <img src="/region1.jpg" alt="mountains" data-aos="fade-up" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                        <h2>Mountains</h2>
                        <p><span>90</span> Properties</p>
                    </div>
                    <div className="card">
                        <img src="/region2.jpg" alt="Coastline" data-aos="fade-down" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" />
                        <h2>Coastline</h2>
                        <p><span>40</span> Properties</p>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Regions

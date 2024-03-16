import React from 'react'
import { villas } from '../../villas'
import { Link } from 'react-router-dom'
import { RxDot } from 'react-icons/rx'
import { IoIosPeople } from 'react-icons/io'
import { FaBed, FaBath } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'

const Villas = () => {
    return (
        <>
            <section className='page' id='allVillas'>
                <h5>Discover Your Dream Villa. Explore Our Exclusive Collection!</h5>
                <p><strong>{villas.length} Properties</strong></p>
                <div className="villasContainer">
                    {
                        villas.map(element => {
                            return (
                                <Link className='card' to={`/villa/${element.id}`} key={element.id}>
                                    <img src={element.image} alt={element.name} data-aos="fade-down" data-aos-duration="1000"
                                        data-aos-easing="ease-in-out" />
                                    <div className="location_text">
                                        <span>
                                            {element.location}
                                        </span>
                                        <span>
                                            <RxDot />
                                        </span>
                                        <span>{element.category}</span>
                                    </div>
                                    <div className="title_text">
                                        {element.name}
                                    </div>
                                    <div className="specifications">
                                        <div className="spec">
                                            <IoIosPeople />
                                            <span>{element.guests}</span>
                                            Guests
                                        </div>

                                        <div className="spec">
                                            <FaBed />
                                            <span>{element.bedrooms}</span>
                                            Bedrooms
                                        </div>

                                        <div className="spec">
                                            <BiArea />
                                            <span>{element.squareMeter}</span>
                                            Area
                                        </div>

                                        <div className="spec">
                                            <FaBath />
                                            <span>{element.bathrooms}</span>
                                            Bathrooms
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default Villas

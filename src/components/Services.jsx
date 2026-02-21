import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="services" className="services section-bg">
            <div className="container" ref={revealRef}>
                <div className="section-title reveal-item">
                    <h2>Our Services</h2>
                    <p>
                        Experience exceptional security solutions tailored to your needs.
                    </p>
                </div>

                <div className="row reveal-container">
                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-dog"></i></div>
                            <h4><a href="">Dog Security</a></h4>
                            <p>
                                Highly trained security dogs serving as formidable deterrents and
                                reliable protectors against intruders for your home or business.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-car-crash"></i></div>
                            <h4><a href="">Car Patrols</a></h4>
                            <p>
                                Mobile security patrols equipped to monitor and safeguard
                                areas, ensuring a secure environment.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-cctv"></i></div>
                            <h4><a href="">Watchmen & CCTV</a></h4>
                            <p>
                                Professional security personnel combined with state-of-the-art camera
                                systems for round-the-clock surveillance and immediate response.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-group"></i></div>
                            <h4><a href="">Personal Body Guards</a></h4>
                            <p>
                                Experienced, highly-trained close protection officers dedicated to
                                ensuring your personal safety and peace of mind, 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

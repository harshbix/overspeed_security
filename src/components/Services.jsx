import React from 'react';

const Services = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <p>
                        Experience exceptional security solutions tailored to your needs.
                    </p>
                </div>

                <div className="row">
                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-dog"></i></div>
                            <h4><a href="">Dog Security</a></h4>
                            <p>
                                Trained Dogs to become you home security friend & ensuring
                                protection against intruders.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                        data-aos="zoom-in"
                        data-aos-delay="200"
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
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-cctv"></i></div>
                            <h4><a href="">Watchmen & CCTV</a></h4>
                            <p>
                                Professional security personnel & cameras providing
                                round-the-clock surveillance and immediate response.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxs-group"></i></div>
                            <h4><a href="">Personal Body Guards</a></h4>
                            <p>
                                Proffesional body guards with expernce ensuring your safety
                                24/7. look no further
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

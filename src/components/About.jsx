import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About Us</h2>
                </div>

                <div className="row content">
                    <div className="col-lg-6">
                        <p>
                            Established in July 2008 in Mafinga, Iringa, Tanzania, Overspeed
                            Security Company was founded by Mr. Zabron Philipo Simba [RTD].
                            His obectives were as follows ;
                        </p>
                        <ul>
                            <li>
                                <i className="ri-check-double-line"></i> Elevate Security
                                Standards: Implement cutting-edge technology for enhanced
                                safety.
                            </li>
                            <li>
                                <i className="ri-check-double-line"></i> Client Satisfaction:
                                Exceed expectations, address concerns promptly, foster
                                long-term relationships.
                            </li>
                            <li>
                                <i className="ri-check-double-line"></i> Professional Development:
                                Prioritize ongoing training, uphold ethical standards, ensure
                                competence.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            OVERSPEED COMPANY LIMITED , Maintains a master metric on
                            quality-related activities via status reporting activities,
                            these measurements will be analysed primarily based on
                            individual qualifications checklists, deliverables , perfomances
                            ratings to assist in the management of quality assurance ad
                            control actiities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

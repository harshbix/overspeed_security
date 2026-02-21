import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="about" className="about">
            <div className="container" ref={revealRef}>
                <div className="section-title reveal-item">
                    <h2>About Us</h2>
                </div>

                <div className="row content reveal-container">
                    <div className="col-lg-6">
                        <p>
                            Established in July 2008 in Mafinga, Iringa, Tanzania, Overspeed
                            Security Company was founded by Mr. Zabron Philipo Simba [RTD].
                            Our core objectives include:
                        </p>
                        <ul>
                            <li>
                                <i className="ri-check-double-line"></i> Elevating Security
                                Standards: Implementing cutting-edge technology and robust
                                strategies for enhanced safety and rapid response.
                            </li>
                            <li>
                                <i className="ri-check-double-line"></i> Client Satisfaction:
                                Exceeding expectations by addressing concerns promptly and
                                fostering long-term, trust-based relationships.
                            </li>
                            <li>
                                <i className="ri-check-double-line"></i> Professional Development:
                                Prioritizing ongoing training, upholding strict ethical standards,
                                and ensuring peak competence across all ranks.
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            Overspeed Security Company maintains comprehensive metrics on all quality-related
                            activities through rigorous status reporting. These measurements are analyzed
                            based on individual qualification checklists, operational deliverables, and
                            performance ratings to guarantee the highest standards in quality assurance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Team = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="team" className="team section-bg">
            <div className="container" ref={revealRef}>
                <div className="section-title reveal-item">
                    <h2>Team</h2>
                    <p>
                        Discover the passion and expertise that drive our team at
                        Overspeed Security Company.
                    </p>
                </div>

                <div className="row reveal-container">
                    <div className="col-lg-6">
                        <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img
                                    src="/assets/img/team/team-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Elias Sarumbo</h4>
                                <span>Chief Operation Manager</span>
                                <p>
                                    Overseeing all field operations with precision, ensuring our security deployments are flawless and effective.
                                </p>
                                <div className="social">
                                    <a href="https://twitter.com/eliassarumbo" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
                                    <a href="https://facebook.com/eliassarumbo" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                                    <a href="https://instagram.com/eliassarumbo" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
                                    <a href="https://linkedin.com/in/eliassarumbo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-6 mt-4 mt-lg-0"
                    >
                        <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img
                                    src="/assets/img/team/team-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Madam Tegemea</h4>
                                <span>Accountant</span>
                                <p>
                                    Managing the company's financial health, guaranteeing transparency and efficiency in all our fiscal operations.
                                </p>
                                <div className="social">
                                    <a href="https://twitter.com/madamtegemea" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
                                    <a href="https://facebook.com/madamtegemea" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                                    <a href="https://instagram.com/madamtegemea" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
                                    <a href="https://linkedin.com/in/madamtegemea" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img
                                    src="/assets/img/team/team-3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Nkwama Sadiq</h4>
                                <span>Human Resource Manager</span>
                                <p>
                                    Dedicated to recruiting and retaining elite talent while fostering a culture of excellence and continuous improvement.
                                </p>
                                <div className="social">
                                    <a href="https://twitter.com/nkwamasadiq" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
                                    <a href="https://facebook.com/nkwamasadiq" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                                    <a href="https://instagram.com/nkwamasadiq" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
                                    <a href="https://linkedin.com/in/nkwamasadiq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img
                                    src="/assets/img/team/team-4.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div className="member-info">
                                <h4>Witness Zabron</h4>
                                <span>Assistant Finance Manager</span>
                                <p>
                                    Supporting strategic financial planning and ensuring seamless resource allocation for all security mandates.
                                </p>
                                <div className="social">
                                    <a href="https://twitter.com/witnesszabron" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
                                    <a href="https://facebook.com/witnesszabron" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
                                    <a href="https://instagram.com/witnesszabron" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
                                    <a href="https://linkedin.com/in/witnesszabron" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;

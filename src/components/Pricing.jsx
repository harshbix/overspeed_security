import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Pricing = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="pricing" className="pricing">
            <div className="container" ref={revealRef}>
                <div className="section-title reveal-item">
                    <h2>Pricing</h2>
                    <p>
                        Explore our transparent pricing tiers and equipment charges, designed to provide elite security solutions at competitive rates.
                    </p>
                </div>

                <div className="row reveal-container">
                    <div className="col-lg-4">
                        <div className="box">
                            <h3>Security Guard</h3>
                            <h4><sup>Tsh</sup>550,000<span>throughout</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> 24/7 On-Site Presence</li>
                                <li><i className="bx bx-check"></i> Access Control Management</li>
                                <li><i className="bx bx-check"></i> Incident Reporting</li>
                                <li className="na"><i className="bx bx-x"></i><span>Armed Response Support</span></li>
                                <li className="na"><i className="bx bx-x"></i><span>K-9 Unit Support</span></li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box featured">
                            <h3>Dog Security</h3>
                            <h4><sup>Tsh</sup>850,000<span>throughout</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> 24/7 On-Site Presence</li>
                                <li><i className="bx bx-check"></i> Trained Guard Dog</li>
                                <li><i className="bx bx-check"></i> Perimeter Sweeps</li>
                                <li><i className="bx bx-check"></i> Incident Reporting</li>
                                <li><i className="bx bx-check"></i> Immediate Threat Deterrence</li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box">
                            <h3>Armed Security Guard</h3>
                            <h4><sup>Tsh</sup>850,000<span>throughout</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> 24/7 On-Site Presence</li>
                                <li><i className="bx bx-check"></i> Licensed Armed Personnel</li>
                                <li><i className="bx bx-check"></i> Access Control Management</li>
                                <li><i className="bx bx-check"></i> Rapid Incident Response</li>
                                <li><i className="bx bx-check"></i> High-Value Asset Protection</li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 reveal-container">
                    <div className="col-lg-4">
                        <div className="box">
                            <h3>Radio Call Base</h3>
                            <h4><sup>Tsh</sup>300,000<span>throughout</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> 24/7 Base Station Support</li>
                                <li><i className="bx bx-check"></i> Encrypted Channel Access</li>
                                <li><i className="bx bx-check"></i> Immediate Dispatch Capabilities</li>
                                <li className="na"><i className="bx bx-x"></i><span>Handset Integration</span></li>
                                <li className="na"><i className="bx bx-x"></i><span>Mobile Vehicle Uplink</span></li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box featured">
                            <h3>Radio Call Handset</h3>
                            <h4><sup>Tsh</sup>200,000<span>throughout</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Portable Secure Comms</li>
                                <li><i className="bx bx-check"></i> Long-Range Connectivity</li>
                                <li><i className="bx bx-check"></i> Emergency SOS Button</li>
                                <li><i className="bx bx-check"></i> Direct Base Link</li>
                                <li><i className="bx bx-check"></i> Weatherproof Design</li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="box">
                            <h3>Car Patrol</h3>
                            <h4><sup>Tsh</sup>3,000,000<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Scheduled Perimeter Patrols</li>
                                <li><i className="bx bx-check"></i> Rapid Emergency Response</li>
                                <li><i className="bx bx-check"></i> GPS Tracked Vehicles</li>
                                <li><i className="bx bx-check"></i> 24/7 Dispatch Integration</li>
                                <li><i className="bx bx-check"></i> Multi-Site Coverage</li>
                            </ul>
                            <a href="#contact" className="buy-btn scrollto">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

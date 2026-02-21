import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Overspeed</h3>
                            <p>
                                Mafinga , <br />
                                Iringa - <br />
                                Tanzania<br />
                                <strong>Phone:<br /></strong> +25575 2194 384<br />
                                <strong>Email:</strong> overspeedsecuritycompany@gmail.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#hero" className="scrollto">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about" className="scrollto">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#!">Terms of service</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">Dog Security</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">CCTV camera installation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">Personal body guard</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">Car Patrol</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services" className="scrollto">Security Watchmen</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>
                                Connect with us across our social media platforms to stay updated on our latest security insights and company news.
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://twitter.com/overspeedsecurity" className="twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="https://facebook.com/overspeedsecurity" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://instagram.com/overspeedsecurity" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="https://skype.com/overspeedsecurity" className="google-plus" target="_blank" rel="noopener noreferrer" aria-label="Skype"><i className="bx bxl-skype"></i></a>
                                <a href="https://linkedin.com/company/overspeedsecurity" className="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Overspeed</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://jeconiajunior.vercel.app" target="_blank" rel="noopener noreferrer"><strong>JuniorJeconia</strong></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

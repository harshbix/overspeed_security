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
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Dog Security</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">CCTV camera installation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Personal body guard</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Car Patrol</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Security Watchmen</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>
                                Connect with us across our social media platforms to stay updated on our latest security insights and company news.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
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
                    Designed by <a href="http://github.com/harshbix"><strong>JuniorJeconia</strong></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

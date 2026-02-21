import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
    const revealRef = useScrollReveal();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate network request
        setTimeout(() => {
            setStatus('sent');
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container" ref={revealRef}>
                <div className="section-title reveal-item">
                    <h2>Contact</h2>
                    <p>
                        Get in touch with us for inquiries, consultations, or feedback. We are always ready to address your security needs.
                    </p>
                </div>

                <div className="row reveal-container">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>Mafinga, Iringa - Tanzania</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>overspeedsecuritycompany@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+25575 2194 384</p>
                            </div>

                            <iframe
                                src="https://maps.google.com/maps?q=Mafinga,+Iringa,+Tanzania&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '290px' }}
                                allowFullScreen
                                title="Google Maps - Mafinga, Iringa, Tanzania"
                            ></iframe>
                        </div>
                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form
                            onSubmit={handleSubmit}
                            className="php-email-form"
                        >
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    rows="10"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>
                            <div className="my-3" aria-live="polite">
                                {status === 'loading' && <div className="loading" style={{ display: 'block' }}>Loading...</div>}
                                {status === 'error' && <div className="error-message" style={{ display: 'block' }}>There was an error sending your message.</div>}
                                {status === 'sent' && <div className="sent-message" style={{ display: 'block' }}>Your message has been sent. Thank you!</div>}
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

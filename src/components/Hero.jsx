import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '/assets/img/hero-img.webp';

const Hero = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container" ref={revealRef}>
                <div className="row reveal-container">
                    <div
                        className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                    >
                        <h1>The trusted security service provider.</h1>
                        <h2>
                            Excellence in Security, Grounded in Trust. Your Safety Is Our Top Priority.
                        </h2>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 order-1 order-lg-2 hero-img"
                    >
                        <div style={{ aspectRatio: '1 / 1', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                            <img src={heroImg} className="img-fluid animated" alt="Hero Illustration" fetchpriority="high" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

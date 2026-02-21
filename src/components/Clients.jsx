import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Clients = () => {
    const revealRef = useScrollReveal();
    return (
        <section id="clients" className="clients section-bg">
            <div className="container">
                <div className="row reveal-container" ref={revealRef}>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div
                            key={num}
                            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                        >
                            <img
                                src={`/assets/img/clients/client-${num}.png`}
                                className="img-fluid"
                                alt={`Client ${num}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;

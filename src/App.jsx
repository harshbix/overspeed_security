import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Inject scripts that need to run after components mount
    const scripts = [
      '/assets/vendor/aos/aos.js',
      '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/vendor/glightbox/js/glightbox.min.js',
      '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
      '/assets/vendor/swiper/swiper-bundle.min.js',
      '/assets/vendor/waypoints/noframework.waypoints.js',
      '/assets/js/main.js'
    ];

    const loadScripts = async () => {
      for (const src of scripts) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.onload = resolve;
          script.onerror = resolve; // Continue even if one fails
          document.body.appendChild(script);
        });
      }
    };

    loadScripts();

    return () => {
      // Cleanup scripts if needed
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      })
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <Clients />
        <About />
        <Services />
        {/* Call To Action Section - Inline as it's small */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Contact Us Today</h3>
                <p>
                  Experience top-notch security services tailored to your needs.
                  For inquiries or to discuss your security requirements, feel
                  free to reach out to us.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a
                  className="cta-btn align-middle"
                  href="mailto:overspeedsecuritycompany@gmail.com"
                >Send Email</a>
              </div>
            </div>
          </div>
        </section>
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />


      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      ><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;

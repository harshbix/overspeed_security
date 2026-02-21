import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // Mobile nav toggle logic
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');
    
    if (mobileNavToggle && navbar) {
      const toggleNav = (e) => {
        navbar.classList.toggle('navbar-mobile');
        e.currentTarget.classList.toggle('bi-list');
        e.currentTarget.classList.toggle('bi-x');
      };
      mobileNavToggle.addEventListener('click', toggleNav);
      
      return () => {
        mobileNavToggle.removeEventListener('click', toggleNav);
      };
    }
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><a href="/">OverSpeed</a></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li>
              <a className="getstarted scrollto" href="#about">Get Started</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;

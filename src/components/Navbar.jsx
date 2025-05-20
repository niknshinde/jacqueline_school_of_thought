import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Ultra-modern, beautiful navbar with advanced effects and perfect responsiveness
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 900 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Close mobile menu on route change or scroll
  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: 'Home', exact: true },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  // Handle anchor link click
  const handleAnchorClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const section = document.getElementById('experiences-overview-section');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // This is the key function - closing the mobile menu when any link is clicked
  const handleNavLinkClick = () => {
    if (windowWidth < 900) {
      setMobileOpen(false);
    }
  };

  // Render nav link with hover effects
  const renderNavLink = (to, label, exact = false, idx, isAnchor = false) => {
    if (isAnchor) {
      return (
        <a
          href="/#experiences-overview"
          className="nav-link"
          onClick={(e) => {
            handleAnchorClick(e);
            handleNavLinkClick();
          }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span className="nav-link-text">
            {label}
            <span 
              className={`nav-underline ${hoveredIndex === idx ? 'hovered' : ''}`}
            />
          </span>
        </a>
      );
    }
    
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        end={exact}
        onClick={handleNavLinkClick}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {({ isActive }) => (
          <span className="nav-link-text">
            {label}
            <span 
              className={`nav-underline ${isActive ? 'active' : ''} ${hoveredIndex === idx ? 'hovered' : ''}`}
            />
          </span>
        )}
      </NavLink>
    );
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <Link
            to="/"
            className="logo-container"
            onClick={handleNavLinkClick}
          >
            <img src="/images/logo.png" alt="JSOT Logo" className="logo" />
          </Link>

          <div className={`menu-toggle ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <div className="hamburger">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </div>

          <div className={`nav-overlay ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen(false)} />

          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item, idx) => (
              <li key={item.label} className="nav-item">
                {renderNavLink(item.to, item.label, item.exact, idx, item.isAnchor)}
              </li>
            ))}
            <li className="nav-item cta-item">
              <Link
                to="/book"
                className="cta-button"
                onClick={handleNavLinkClick}
              >
                <span>Book Now</span>
                <svg className="cta-arrow" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Add CSS */}
      <style jsx>{`
        /* Base styles with CSS variables for easy theme customization */
        :root {
          --navbar-height: 80px;
          --navbar-height-mobile: 70px;
          --primary-color: #4f8cff;
          --secondary-color: #38e8c3;
          --accent-color: #ffa500;
          --accent-hover: #ffb347;
          --text-dark: #1a2233;
          --text-light: #fff;
          --box-shadow-light: 0 4px 20px rgba(31, 38, 135, 0.07);
          --box-shadow-medium: 0 8px 32px rgba(31, 38, 135, 0.15);
          --transition-fast: 0.2s ease;
          --transition-medium: 0.3s ease;
          --transition-slow: 0.5s cubic-bezier(0.77, 0, 0.18, 1);
          --font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
          --navbar-bg-transparent: rgba(255, 255, 255, 0.85);
          --navbar-bg-solid: rgba(255, 255, 255, 0.98);
          --navbar-bg-gradient: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 230, 255, 0.85) 100%);
          --underline-gradient: linear-gradient(90deg, var(--primary-color) 30%, var(--secondary-color) 100%);
          --cta-gradient: linear-gradient(90deg, var(--accent-color) 0%, var(--accent-hover) 100%);
          --border-color: #e3e8f0;
          --backdrop-blur: 12px;
          --mobile-menu-bg: rgba(255, 255, 255, 0.98);
          --border-radius-sm: 8px;
          --border-radius-md: 12px;
          --border-radius-lg: 24px;
        }

        /* Navbar base styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--navbar-height);
          z-index: 1000;
          background: var(--navbar-bg-gradient);
          backdrop-filter: blur(var(--backdrop-blur));
          -webkit-backdrop-filter: blur(var(--backdrop-blur));
          border-bottom: 1.5px solid transparent;
          transition: 
            background var(--transition-medium),
            height var(--transition-medium),
            box-shadow var(--transition-medium),
            border-bottom var(--transition-medium);
        }

        .navbar.scrolled {
          background: var(--navbar-bg-solid);
          box-shadow: var(--box-shadow-light);
          height: calc(var(--navbar-height) - 10px);
          border-bottom: 1.5px solid var(--border-color);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo styles */
        .logo-container {
          display: flex;
          align-items: center;
          z-index: 1001;
          height: 100%;
        }

        .logo {
          height: 70px;
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.7);
          padding: 2px 8px;
        }

        .logo-container:hover .logo {
          transform: scale(1.05);
        }

        .navbar.scrolled .logo {
          filter: none;
        }

        /* Navigation links */
        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .nav-item {
          height: 100%;
          display: flex;
          align-items: center;
          margin: 0 1rem;
          position: relative;
        }

        .nav-link {
          color: var(--text-dark);
          font-weight: 500;
          text-decoration: none;
          font-size: 1.05rem;
          letter-spacing: 0.01em;
          padding: 0.5rem 0;
          transition: color var(--transition-fast);
          display: flex;
          align-items: center;
          position: relative;
        }

        .nav-link-text {
          position: relative;
          display: inline-block;
        }

        .nav-link:hover, 
        .nav-link.active {
          color: var(--primary-color);
        }

        .nav-underline {
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 3px;
          border-radius: 2px;
          background: var(--underline-gradient);
          transition: width var(--transition-slow);
        }

        .nav-underline.active,
        .nav-underline.hovered {
          width: 100%;
        }

        /* CTA Button */
        .cta-item {
          margin-left: 1.2rem;
        }

        .cta-button {
          background: var(--cta-gradient);
          color: var(--text-light);
          padding: 0.75rem 1.6rem;
          border-radius: var(--border-radius-lg);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(255, 165, 0, 0.15);
          transition: 
            transform var(--transition-fast),
            box-shadow var(--transition-fast),
            background-position var(--transition-medium);
          background-size: 200% auto;
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(255, 165, 0, 0.25);
          background-position: right center;
        }

        .cta-button:active {
          transform: translateY(1px);
        }

        .cta-arrow {
          margin-left: 0.5rem;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          transition: transform 0.2s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Mobile menu toggle */
        .menu-toggle {
          display: none;
          cursor: pointer;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: transparent;
          transition: background 0.2s ease;
          z-index: 1001;
          place-items: center;
        }

        .menu-toggle:hover {
          background: rgba(200, 230, 255, 0.2);
        }

        .hamburger {
          width: 24px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .line {
          display: block;
          width: 100%;
          height: 3px;
          background-color: var(--text-dark);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .menu-toggle.active .line-1 {
          transform: translateY(8.5px) rotate(45deg);
        }

        .menu-toggle.active .line-2 {
          opacity: 0;
          transform: scale(0);
        }

        .menu-toggle.active .line-3 {
          transform: translateY(-8.5px) rotate(-45deg);
        }

        /* Overlay for mobile menu */
        .nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Add margin to main content so it's not hidden by navbar */
        main {
          margin-top: var(--navbar-height);
        }
        @media (max-width: 900px) {
          main {
            margin-top: var(--navbar-height-mobile);
          }
        }

        /* Responsive styles */
        @media (max-width: 900px) {
          .navbar {
            height: var(--navbar-height-mobile);
          }

          .navbar.scrolled {
            height: var(--navbar-height-mobile);
          }

          .navbar-container {
            padding: 0 1.2rem;
          }

          .logo {
            height: 40px;
          }

          .menu-toggle {
            display: grid;
          }

          .nav-links {
            position: fixed;
            flex-direction: column;
            top: 0;
            right: 0;
            width: 75%;
            max-width: 350px;
            height: 100vh;
            padding: calc(var(--navbar-height-mobile) + 2rem) 2rem 2rem;
            background: var(--mobile-menu-bg);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            overflow-y: auto;
            align-items: flex-start;
          }

          .nav-links.open {
            transform: translateX(0);
          }

          .nav-item {
            margin: 0;
            width: 100%;
            height: auto;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .nav-item:last-child {
            border-bottom: none;
            margin-top: 1rem;
          }

          .nav-link {
            font-size: 1.2rem;
            width: 100%;
          }

          .cta-item {
            margin-left: 0;
            margin-top: 1rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 1rem;
          }
        }

        @media (max-width: 600px) {
          .navbar-container {
            padding: 0 1rem;
          }

          .nav-links {
            width: 85%;
            padding: calc(var(--navbar-height-mobile) + 1rem) 1.5rem 1.5rem;
          }

          .logo {
            height: 70px;
          }
        }

        /* Additional animations and effects */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .navbar {
          animation: fadeInDown 0.5s ease-out;
        }

        /* Add a subtle gradient animation for the CTA button */
        .cta-button {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';

// Enhanced Ultra-Modern Glamping Highlights Component with Green Theme
const GlampingHighlights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('glamping-highlights-section');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Glamping data
  const highlightsData = [
    {
      icon: "🛖",
      title: "Glamping Dome Tents",
      description: "The ultimate in luxury glamping. Look like space observatories, with killer views to match!"
    },
    {
      icon: "⛺",
      title: "Deluxe Tents",
      description: "These come with the thrill of pitching camp in the outdoors, with no compromise on comfort."
    },
    {
      icon: "🍲",
      title: "Home cooked meals",
      description: "Soulful Chettinad/Maharashtrian cuisine, cooked with farm-fresh ingredients & big helpings of love."
    },
    {
      icon: "🔥",
      title: "Bonfire & BBQ",
      description: "Nippy breeze, warm crackling fire, wafting aromas from a charcoal grill...you get the idea!"
    }
  ];

  return (
    <section id="glamping-highlights-section" className={`glamping-section ${isVisible ? 'visible' : ''}`}>
      <div className="glamping-container">
        <div className="glamping-header">
          <h2 className="glamping-title">Experience GLAMPING</h2>
          <div className="glamping-divider"></div>
        </div>
        
        <div className="glamping-grid">
          {highlightsData.map((item, index) => (
            <div
              key={index}
              className={`glamping-card ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onFocus={() => setHoveredCard(index)}
              onBlur={() => setHoveredCard(null)}
              tabIndex={0}
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  <span 
                    className="glamping-icon" 
                    role="img" 
                    aria-label={item.title}
                  >
                    {item.icon}
                  </span>
                  <div className="icon-glow"></div>
                </div>
                
                <h3 className="glamping-card-title">{item.title}</h3>
                <p className="glamping-card-desc">{item.description}</p>
              </div>
              
              <div className="card-background">
                <div className="card-shine"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glamping-additional">
          <div className="additional-content">
            <p>
              Also on offer are <strong>fast Wifi</strong>, TV, karaoke, free parking, 
              clean western toilets &amp; baths with running hot &amp; cold water in the common area. 
              <span className="highlight"> A luxurious campsite indeed!</span>
            </p>
          </div>
          <div className="additional-accent-1"></div>
          <div className="additional-accent-2"></div>
        </div>
      </div>
      
      {/* Visual decorations */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
      <div className="decoration decoration-3"></div>
      
      {/* Enhanced CSS with Green Theme */}
      <style jsx>{`
        /* Base variables - Green Theme */
        :root {
          --primary-green: #1e5631;
          --accent-green: #2E7D32;
          --light-green: #4CAF50;
          --ultra-light-green: #E8F5E9;
          --highlight-green: #81C784;
          --text-dark: #2c3e50;
          --text-medium: #34495e;
          --text-light: #27532a;
          --white: #FFFFFF;
          --card-shadow: 0 10px 30px rgba(46, 125, 50, 0.12), 0 4px 8px rgba(0, 0, 0, 0.05);
          --card-shadow-hover: 0 14px 45px rgba(46, 125, 50, 0.18), 0 10px 18px rgba(0, 0, 0, 0.08);
          --gold-accent: #ffcc00;
          --transition-fast: 0.2s ease;
          --transition-medium: 0.3s ease;
          --transition-slow: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          --border-radius-sm: 12px;
          --border-radius-md: 18px;
          --border-radius-lg: 24px;
          --font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
        }
        
        /* Section base styles */
        .glamping-section {
          padding: 80px 16px;
          background: linear-gradient(135deg, var(--ultra-light-green) 0%, #d7eedb 100%);
          position: relative;
          overflow: hidden;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .glamping-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        
        /* Header styles */
        .glamping-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .glamping-section.visible .glamping-header {
          opacity: 1;
          transform: translateY(0);
        }
        
        .glamping-title {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          font-weight: 800;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: var(--font-family);
          margin: 0 0 20px 0;
          background: linear-gradient(90deg, var(--primary-green) 0%, var(--accent-green) 50%, var(--primary-green) 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 5s linear infinite;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .glamping-divider {
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, var(--gold-accent) 0%, var(--primary-green) 100%);
          border-radius: 3px;
          margin: 0 auto;
          position: relative;
        }
        
        .glamping-divider:before,
        .glamping-divider:after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold-accent);
          top: -2.5px;
        }
        
        .glamping-divider:before {
          left: -5px;
        }
        
        .glamping-divider:after {
          right: -5px;
        }
        
        /* Grid layout */
        .glamping-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        /* Card styles */
        .glamping-card {
          background: var(--white);
          border-radius: var(--border-radius-md);
          box-shadow: var(--card-shadow);
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-height: 280px;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(40px);
        }
        
        .glamping-section.visible .glamping-card {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered animation delay for cards */
        .glamping-section.visible .glamping-card:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .glamping-section.visible .glamping-card:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .glamping-section.visible .glamping-card:nth-child(3) {
          transition-delay: 0.3s;
        }
        
        .glamping-section.visible .glamping-card:nth-child(4) {
          transition-delay: 0.4s;
        }
        
        .glamping-card.hovered {
          transform: translateY(-8px);
          box-shadow: var(--card-shadow-hover);
        }
        
        .card-content {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
        }
        
        .card-background {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          border-radius: var(--border-radius-md);
        }
        
        .card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          opacity: 0;
          transform: scale(0.8);
          transition: opacity var(--transition-medium), transform var(--transition-medium);
        }
        
        .glamping-card.hovered .card-shine {
          opacity: 0.4;
          transform: scale(1);
        }
        
        /* Icon styles */
        .icon-wrapper {
          position: relative;
          margin-bottom: 20px;
        }
        
        .glamping-icon {
          font-size: 3.5rem;
          display: inline-block;
          transition: transform var(--transition-medium);
          position: relative;
          z-index: 2;
        }
        
        .glamping-card.hovered .glamping-icon {
          transform: scale(1.2) rotate(-6deg);
        }
        
        .icon-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(46, 125, 50, 0.2) 0%,
            rgba(46, 125, 50, 0) 70%
          );
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
          transition: opacity var(--transition-medium), transform var(--transition-medium);
          z-index: 1;
        }
        
        .glamping-card.hovered .icon-glow {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 1;
        }
        
        /* Text styles */
        .glamping-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent-green);
          margin: 0 0 15px 0;
          transition: transform var(--transition-fast);
          font-family: var(--font-family);
        }
        
        .glamping-card.hovered .glamping-card-title {
          transform: translateY(-2px);
        }
        
        .glamping-card-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0;
          transition: transform var(--transition-fast);
        }
        
        .glamping-card.hovered .glamping-card-desc {
          transform: translateY(-2px);
        }
        
        /* Additional info box */
        .glamping-additional {
          background: rgba(217, 237, 220, 0.85);
          backdrop-filter: blur(5px);
          border-radius: var(--border-radius-md);
          padding: 30px;
          max-width: 720px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(46, 125, 50, 0.12);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.5s;
        }
        
        .glamping-section.visible .glamping-additional {
          opacity: 1;
          transform: translateY(0);
        }
        
        .additional-content {
          position: relative;
          z-index: 2;
        }
        
        .additional-content p {
          font-size: 1.12rem;
          line-height: 1.7;
          color: var(--text-light);
          margin: 0;
          text-align: center;
        }
        
        .highlight {
          color: var(--primary-green);
          font-weight: 700;
        }
        
        .additional-accent-1,
        .additional-accent-2 {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }
        
        .additional-accent-1 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(46, 125, 50, 0) 70%);
          top: -50px;
          left: -50px;
        }
        
        .additional-accent-2 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.1) 0%, rgba(46, 125, 50, 0) 70%);
          bottom: -30px;
          right: -30px;
        }
        
        /* Background decorations */
        .decoration {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
          z-index: 1;
        }
        
        .decoration-1 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.2) 0%, rgba(46, 125, 50, 0) 70%);
          top: -100px;
          right: 10%;
        }
        
        .decoration-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(46, 125, 50, 0) 70%);
          bottom: -150px;
          left: -100px;
        }
        
        .decoration-3 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, rgba(255, 204, 0, 0) 70%);
          top: 30%;
          left: 5%;
        }
        
        /* Animations */
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Responsive styles */
        @media (max-width: 900px) {
          .glamping-section {
            padding: 60px 16px;
          }
          
          .glamping-header {
            margin-bottom: 40px;
          }
          
          .glamping-grid {
            gap: 25px;
          }
        }
        
        @media (max-width: 768px) {
          .glamping-divider {
            width: 60px;
            height: 4px;
          }
          
          .glamping-card {
            padding: 30px 16px;
            min-height: 240px;
          }
          
          .glamping-icon {
            font-size: 3rem;
          }
          
          .glamping-additional {
            padding: 24px 20px;
          }
          
          .additional-content p {
            font-size: 1.05rem;
          }
        }
        
        @media (max-width: 480px) {
          .glamping-section {
            padding: 50px 12px;
          }
          
          .glamping-header {
            margin-bottom: 30px;
          }
          
          .glamping-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .glamping-card {
            padding: 25px 15px;
            min-height: 200px;
          }
          
          .glamping-icon {
            font-size: 2.8rem;
          }
          
          .glamping-card-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          
          .glamping-card-desc {
            font-size: 1rem;
          }
          
          .glamping-additional {
            padding: 20px 15px;
          }
          
          .additional-content p {
            font-size: 1rem;
          }
          
          .glamping-divider {
            width: 50px;
            height: 4px;
          }
        }

        /* Fallback for browsers that don't support backdrop-filter */
        @supports not (backdrop-filter: blur(5px)) {
          .glamping-additional {
            background: rgba(217, 237, 220, 0.95);
          }
        }
      `}</style>
    </section>
  );
};

export default GlampingHighlights;
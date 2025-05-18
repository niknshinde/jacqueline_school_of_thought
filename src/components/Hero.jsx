import React, { useState, useEffect } from 'react';

const EnhancedGlampingHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated shapes component
  const AnimatedShapes = () => (
    <svg
      viewBox="0 0 1000 1000"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        opacity: 0.3,
      }}
    >
      <circle cx="120" cy="200" r="90" fill="#e0f7fa">
        <animate attributeName="cy" values="200;300;200" dur="8s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="850" cy="800" rx="70" ry="40" fill="#c8e6c9">
        <animate attributeName="cx" values="850;800;850" dur="9s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="700" cy="150" r="60" fill="#ffecb3">
        <animate attributeName="r" values="60;75;60" dur="7s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="300" cy="900" rx="50" ry="25" fill="#bbdefb">
        <animate attributeName="cy" values="900;850;900" dur="10s" repeatCount="indefinite" />
      </ellipse>
      <circle cx="500" cy="500" r="40" fill="#e1bee7">
        <animate attributeName="r" values="40;55;40" dur="12s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  // Water ripple animation
  const WaterRipple = () => (
    <div className="water-ripple" style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '30%',
      background: 'linear-gradient(to bottom, rgba(224, 247, 250, 0) 0%, rgba(224, 247, 250, 0.25) 100%)',
      zIndex: 2,
      opacity: 0.7,
      transform: `translateY(${scrollPosition * 0.2}px)`,
    }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '75px', transform: 'rotate(180deg)' }}>
        <path d="M0,0 C150,90 350,0 500,100 C650,190 750,100 900,50 C1050,20 1200,80 1200,80 L1200,0 L0,0 Z" style={{ 
          fill: 'rgba(255, 255, 255, 0.3)',
          animation: 'wave 15s linear infinite',
        }}></path>
        <path d="M0,0 C300,80 400,40 600,80 C800,120 1100,40 1200,30 L1200,0 L0,0 Z" style={{ 
          fill: 'rgba(255, 255, 255, 0.2)', 
          animation: 'wave 10s linear infinite reverse',
        }}></path>
      </svg>
    </div>
  );

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '500px',
    }}>
      {/* Background with parallax effect */}
      <div className="hero-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '120%',
        backgroundImage: `url('/images/hero-background.jpg')`, // Replace with your actual image path when deployed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
        transform: `translateY(${scrollPosition * 0.4}px)`,
        transition: 'transform 0.05s ease-out',
        filter: 'brightness(0.95) contrast(1.1)',
      }}></div>
      
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(0, 150, 136, 0.2) 50%, rgba(33, 150, 243, 0.15) 100%)`,
        zIndex: 2,
      }}></div>

      {/* Animated shapes */}
      <AnimatedShapes />
      
      {/* Water ripple animation */}
      <WaterRipple />

      {/* Content container */}
      <div className="content-container" style={{
        position: 'relative',
        zIndex: 4,
        textAlign: 'center',
        padding: '32px 6vw',
        maxWidth: '900px',
        width: '100%',
        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
        opacity: isLoaded ? 1 : 0,
        transition: 'transform 1.2s cubic-bezier(.4,2,.3,1), opacity 1.2s cubic-bezier(.4,2,.3,1)',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '28px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1.5px solid rgba(255,255,255,0.2)',
      }}>
        {/* Main heading with staggered animation */}
        <h1 style={{margin: 0}}>
          <span className="heading-top" style={{
            display: 'block',
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.1rem, 6vw, 3.6rem)',
            fontWeight: '800',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            color: '#fff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(.4,2,.3,1), opacity 0.8s cubic-bezier(.4,2,.3,1)',
          }}>
            Luxurious
          </span>
          <span className="heading-main" style={{
            display: 'block',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(2.3rem, 8vw, 5rem)',
            fontWeight: '900',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.3)',
            background: `linear-gradient(90deg, #ffeb3b 0%, #fff176 50%, #ffd54f 100%)`,
            backgroundSize: '200% auto',
            color: '#fff', // fallback
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(.4,2,.3,1) 0.2s, opacity 0.8s cubic-bezier(.4,2,.3,1) 0.2s',
            animation: 'shine 3s infinite alternate',
          }}>
            GLAMPING
          </span>
        </h1>

        {/* Tagline */}
        <p className="tagline" style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          margin: '1.8rem 0 2.5rem 0',
          lineHeight: '1.7',
          fontWeight: '400',
          color: '#fff',
          textShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(.4,2,.3,1) 0.4s, opacity 0.8s cubic-bezier(.4,2,.3,1) 0.4s',
        }}>
          Experience nature's embrace in ultimate comfort. Unforgettable adventures await just beyond the city.
        </p>

        {/* CTA Button */}
        <button
          className="cta-button"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)',
            color: 'white',
            padding: '1.1rem 2.5rem',
            fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '700',
            border: 'none',
            borderRadius: '50px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
            position: 'relative',
            overflow: 'hidden',
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.6s',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.07)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
            e.currentTarget.style.background = 'linear-gradient(90deg, #81c784 0%, #4caf50 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            e.currentTarget.style.background = 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)';
          }}
        >
          <span style={{
            position: 'relative',
            zIndex: 2,
            letterSpacing: '1px'
          }}>
            Book Your Escape Now
          </span>
        </button>
      </div>

      {/* Location tag */}
      <div className="location-tag" style={{
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '0.7rem 1.2rem',
        borderRadius: '12px',
        fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '600',
        zIndex: 5,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
        borderLeft: '4px solid #4caf50',
        display: 'flex',
        alignItems: 'center',
        transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
        opacity: isLoaded ? 1 : 0,
        transition: 'transform 0.8s cubic-bezier(.4,2,.3,1) 0.8s, opacity 0.8s cubic-bezier(.4,2,.3,1) 0.8s',
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#4caf50" style={{ marginRight: '10px' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        30 kms from Pune city
      </div>

      {/* Features tag - new element */}
      <div className="features-tag" style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        display: 'flex',
        gap: '15px',
        zIndex: 5,
        transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
        opacity: isLoaded ? 1 : 0,
        transition: 'transform 0.8s cubic-bezier(.4,2,.3,1) 1s, opacity 0.8s cubic-bezier(.4,2,.3,1) 1s',
      }}>
        {[
          { icon: "M7 10l5 5 5-5z", text: "Luxury Domes" },
          { icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z", text: "Natural Sounds" },
          { icon: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z", text: "Adventure" }
        ].map((feature, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '0.6rem 1rem',
            borderRadius: '12px',
            fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            fontFamily: "'Lato', sans-serif",
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4caf50" style={{ marginRight: '8px' }}>
              <path d={feature.icon} />
            </svg>
            {feature.text}
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600;800;900&family=Lato:wght@300;400;700&display=swap');
        
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes wave {
          0% { transform: translateX(0) translateZ(0) scaleY(1); }
          50% { transform: translateX(-25%) translateZ(0) scaleY(0.8); }
          100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
        }
        
        /* Mobile responsiveness */
        @media (max-width: 900px) {
          .features-tag {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .content-container {
            padding: 24px 4vw !important;
            margin: 0 20px !important;
          }
          
          .location-tag {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
        
        @media (max-width: 600px) {
          .content-container {
            padding: 20px 3vw !important;
            border-radius: 20px !important;
          }
          
          .heading-top {
            font-size: 1.8rem !important;
          }
          
          .heading-main {
            font-size: 2.8rem !important;
          }
          
          .tagline {
            font-size: 1rem !important;
            margin: 1.2rem 0 2rem 0 !important;
          }
          
          .cta-button {
            padding: 0.9rem 2rem !important;
            font-size: 1rem !important;
          }
          
          .location-tag {
            bottom: 15px !important;
            right: 15px !important;
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .content-container {
            padding: 16px 2vw !important;
            margin: 0 12px !important;
          }
          
          .heading-top {
            font-size: 1.5rem !important;
          }
          
          .heading-main {
            font-size: 2.4rem !important;
          }
          
          .tagline {
            font-size: 0.9rem !important;
            margin: 1rem 0 1.8rem 0 !important;
          }
          
          .cta-button {
            padding: 0.8rem 1.8rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedGlampingHero;
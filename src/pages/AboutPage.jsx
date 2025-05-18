import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // trigger entrance animation
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const sectionStyle = {
    padding: 'clamp(60px, 10vh, 100px) 20px',
    background: 'linear-gradient(135deg, #e8f5e9 0%, #dbf0df 50%, #e3ffe6 100%)',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
    fontWeight: 800,
    textTransform: 'uppercase',
    marginBottom: '1rem',
    letterSpacing: '0.04em',
    textShadow: '0px 2px 4px rgba(0,0,0,0.08)',
    background: 'linear-gradient(90deg, #1B5E20 0%, #388E3C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.17,0.67,0.35,1.25)',
  };

  const cardStyle = {
    background: 'rgba(255,255,255,0.92)',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(46,125,50,0.12)',
    padding: '2rem',
    maxWidth: '800px',
    margin: '2rem auto 0',
    textAlign: 'left',
    lineHeight: 1.6,
    color: '#333',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
  };

  const paragraphStyle = {
    marginBottom: '1.2rem',
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>About JSOT Glamping</h1>

      <div style={cardStyle}>
        <p style={paragraphStyle}>
          Welcome to <strong>JSOT (Jackuline School of Thought) Glamping</strong>! We are a family‐run venture deeply committed to holistic, sustainable living. Nestled in the quaint village of Katarkhadak, we offer an escape that harmonizes perfectly with nature.
        </p>
        <p style={paragraphStyle}>
          Our vision is to provide an unparalleled off‐the‐grid glamping experience where the simple joys of life, the thrill of breathtaking outdoors, and a connection with the local community come together. The stunning lake and mountain vistas are a constant source of inspiration, and we actively involve our village community in every aspect of our operations.
        </p>
        <p style={paragraphStyle}>
          Join us to discover adventure, wellness, arts, and community—all wrapped in luxurious comfort and an eco‐friendly ethos. We can’t wait to share our slice of paradise with you!
        </p>
      </div>
    </section>
  );
};

export default AboutPage;

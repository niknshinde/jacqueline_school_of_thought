import React, { useState, useEffect } from 'react';

// Inline SVG Icon components (no external images needed)
const WellnessIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: '15px' }} fill="none">
    <circle cx="30" cy="30" r="28" stroke="#4fc3f7" strokeWidth="2" fill="#e1f5fe"/>
    <path d="M30 18a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" fill="#4fc3f7" opacity="0.7"/>
    <circle cx="30" cy="30" r="6" fill="#0288d1"/>
  </svg>
);
const AdventureIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: '15px' }} fill="none">
    <ellipse cx="30" cy="42" rx="18" ry="10" fill="#b2dfdb"/>
    <path d="M30 42 Q30 24 50 18 Q44 38 30 42 Z" fill="#388e3c" opacity="0.7"/>
    <path d="M30 42 Q30 24 10 18 Q16 38 30 42 Z" fill="#66bb6a" opacity="0.7"/>
    <circle cx="30" cy="26" r="5" fill="#43a047"/>
  </svg>
);
const ArtsIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: '15px' }} fill="none">
    <rect x="13" y="13" width="34" height="34" rx="10" fill="#ffd54f"/>
    <path d="M18 42 Q30 24 42 42" stroke="#fbc02d" strokeWidth="2" fill="none"/>
    <circle cx="30" cy="30" r="7" fill="#f57c00"/>
  </svg>
);
const CommunityIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: '15px' }} fill="none">
    <circle cx="30" cy="30" r="28" fill="#ffe0b2" stroke="#ffb300" strokeWidth="2"/>
    <circle cx="30" cy="30" r="10" fill="#ffb300" opacity="0.7"/>
    <circle cx="18" cy="30" r="5" fill="#ffb300" opacity="0.5"/>
    <circle cx="42" cy="30" r="5" fill="#ffb300" opacity="0.5"/>
  </svg>
);

const ExperiencesOverview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  // Styles re-used from AdventureSection
  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: 'clamp(60px, 10vh, 100px) 20px',
    background: 'linear-gradient(135deg, #e8f5e9 0%, #dbf0df 50%, #e3ffe6 100%)',
    textAlign: 'center',
  };
  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    color: '#1e6928',
    textTransform: 'uppercase',
    marginBottom: '15px',
    letterSpacing: '0.04em',
    textShadow: '0px 2px 4px rgba(0,0,0,0.08)',
    background: 'linear-gradient(90deg, #1B5E20 0%, #388E3C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.17,0.67,0.35,1.25)',
  };
  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#2E7D32',
    maxWidth: '700px',
    margin: '0 auto 60px auto',
    lineHeight: 1.6,
    fontWeight: 400,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.8s ease 0.2s',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'clamp(20px, 3vw, 30px)',
    maxWidth: '1400px',
    margin: '0 auto',
    justifyContent: 'center',
  };
  const cardStyle = {
    background: 'rgba(255,255,255,0.98)',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(46,125,50,0.10), 0 1.5px 8px rgba(46,125,50,0.08)',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    flex: '1 1 300px',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
    opacity: isLoaded ? 1 : 0,
  };
  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
  };
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.165,0.84,0.44,1)',
  };
  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)',
    opacity: 0.7,
    transition: 'opacity 0.4s ease',
  };
  const iconStyle = { margin: '15px auto' };
  const expTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#2E7D32',
    margin: '12px 0',
  };
  const descStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.7',
    padding: '0 20px 20px',
    flex: 1,
  };

  const experiences = [
    { title: 'Wellness', description: 'Nurture your mind, body, and soul with activities designed for rejuvenation and inner peace.', icon: <WellnessIcon />, image: '/images/wellness.webp' },
    { title: 'Adventure', description: 'Explore the great outdoors with thrilling activities, scenic trails, and lakeside excursions.', icon: <AdventureIcon />, image: '/images/adventure.webp' },
    { title: 'Arts & Culture', description: 'Engage your creativity with workshops, performances, and a deep dive into local culture.', icon: <ArtsIcon />, image: '/images/arts.webp' },
    { title: 'Community', description: 'Connect with local life, participate in organic farming, and share stories around the soul kitchen.', icon: <CommunityIcon />, image: '/images/community.webp' },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Craft Your Experience</h2>
      <p style={subtitleStyle}>At JSOT, we believe in holistic living. Choose from a variety of experiences designed to enrich your stay and connect you with nature, creativity, and community.</p>
      <div style={gridStyle}>
        {experiences.map((item, idx) => (
          <div
            key={idx}
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              const img = e.currentTarget.querySelector('img'); img && (img.style.transform = 'scale(1.08)');
              const overlay = e.currentTarget.querySelector('.img-overlay'); overlay && (overlay.style.opacity = '0.4');
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              const img = e.currentTarget.querySelector('img'); img && (img.style.transform = 'scale(1)');
              const overlay = e.currentTarget.querySelector('.img-overlay'); overlay && (overlay.style.opacity = '0.7');
            }}
          >
            <div style={imageContainerStyle}>
              <img src={item.image} alt={item.title} style={imageStyle} />
              <div className="img-overlay" style={imageOverlayStyle}></div>
            </div>
            <div style={iconStyle}>{item.icon}</div>
            <h3 style={expTitleStyle}>{item.title}</h3>
            <p style={descStyle}>{item.description}</p>
          </div>
        ))}
      </div>

      <style>
        {`@keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none;} }
          @keyframes float { 0% { transform: translateY(0px);} 100% { transform: translateY(-30px);} }
          @media (min-width: 768px) { .experiences-grid { display: flex !important; flex-wrap: wrap !important; } }
        `}
      </style>
    </section>
  );
};

export default ExperiencesOverview;

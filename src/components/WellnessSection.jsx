import React from 'react';

// Inline SVG Icon components (no external images needed)
const InnerJourneysIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <circle cx="25" cy="25" r="24" stroke="#4fc3f7" strokeWidth="2" fill="#e1f5fe"/>
    <path d="M25 15a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" fill="#4fc3f7" opacity="0.7"/>
    <circle cx="25" cy="25" r="5" fill="#0288d1"/>
  </svg>
);

const NurtureNatureIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="35" rx="15" ry="8" fill="#b2dfdb"/>
    <path d="M25 35 Q25 20 40 15 Q35 30 25 35 Z" fill="#388e3c" opacity="0.7"/>
    <path d="M25 35 Q25 20 10 15 Q15 30 25 35 Z" fill="#66bb6a" opacity="0.7"/>
    <circle cx="25" cy="20" r="4" fill="#43a047"/>
  </svg>
);

const CreativeTherapyIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <rect x="10" y="10" width="30" height="30" rx="8" fill="#ffd54f"/>
    <path d="M15 35 Q25 20 35 35" stroke="#fbc02d" strokeWidth="2" fill="none"/>
    <circle cx="25" cy="25" r="5" fill="#f57c00"/>
  </svg>
);

const MindBodyIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="35" rx="13" ry="7" fill="#b3e5fc"/>
    <circle cx="25" cy="22" r="8" fill="#81d4fa"/>
    <ellipse cx="25" cy="22" rx="4" ry="8" fill="#0288d1" opacity="0.5"/>
    <circle cx="25" cy="22" r="3" fill="#0288d1"/>
  </svg>
);

const WellnessSection = () => {
  // Gradient background with floating shapes
  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #e0f7fa 0%, #f0f8ff 100%)',
  };

  const headerContainerStyle = {
    textAlign: 'center',
    marginBottom: '50px',
  };

  const mainTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#2c3e50',
    textTransform: 'uppercase',
    marginBottom: '10px',
  };

  const bannerImageStyle = {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '40px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  };

  // 2x2 grid for large screens, 1 per row for small
  const wellnessGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
    maxWidth: '900px',
    margin: '0 auto 40px auto',
    zIndex: 2,
    position: 'relative',
  };

  // Card style with glassmorphism and hover effect
  const wellnessItemStyle = {
    background: 'rgba(255,255,255,0.96)',
    padding: '32px 24px',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(44, 62, 80, 0.10), 0 1.5px 8px rgba(44, 62, 80, 0.08)',
    textAlign: 'center',
    backdropFilter: 'blur(2px)',
    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
  };

  const wellnessItemTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#34495e',
    marginBottom: '8px',
  };

  const wellnessItemDescriptionStyle = {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.6',
  };

  const facilitatorInfoStyle = {
    backgroundColor: '#e6f3ff',
    padding: '25px',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.7',
    border: '1px solid #b3d9ff',
  };

  const fadeInStyle = {
    animation: 'fadeIn 1.2s ease',
  };

  // Floating decorative shapes
  const floatingShapeStyle = (top, left, size, color, blur = 0.7) => ({
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    background: color,
    borderRadius: '50%',
    filter: `blur(${blur}rem)`,
    opacity: 0.28,
    zIndex: 0,
    animation: 'float 9s ease-in-out infinite alternate',
  });

  const wellnessData = [
    {
      icon: <InnerJourneysIcon />,
      title: "Inner Journeys",
      description: "Meditate, introspect & reconnect with your inner self. Soak in the sounds of silence & tranquility.",
    },
    {
      icon: <NurtureNatureIcon />,
      title: "Nurture through Nature",
      description: "Dip your feet in a bubbling brook, fill your heart with birdsong, take a silent walk through the woods.",
    },
    {
      icon: <CreativeTherapyIcon />,
      title: "Creative Therapy",
      description: "Get the creative juices flowing through our specially curated Creative Expression modules.",
    },
    {
      icon: <MindBodyIcon />,
      title: "Mind Heart & Body Connect",
      description: "Find balance, flow & rejuvenation in the natural rhythm of the land, ideal for a yoga workout!",
    },
  ];

  return (
    <section style={sectionStyle} id="wellness-section">
      {/* Floating decorative shapes */}
      <div style={floatingShapeStyle('10%', '5%', '120px', '#b3e5fc', 1)} />
      <div style={floatingShapeStyle('70%', '80%', '90px', '#81d4fa', 1.2)} />
      <div style={floatingShapeStyle('40%', '60%', '60px', '#4fc3f7', 0.8)} />
      <div style={floatingShapeStyle('20%', '85%', '70px', '#b2ebf2', 1)} />
      {/* Main content with fade-in */}
      <div style={{ position: 'relative', zIndex: 1, ...fadeInStyle }}>
        <div style={headerContainerStyle}>
          <img src="/images/wellness-banner.jpg" alt="Peaceful wellness view" style={bannerImageStyle} />
          <h2 style={mainTitleStyle}>Experience WELLNESS</h2>
        </div>

        <div style={wellnessGridStyle} className="wellness-grid">
          {wellnessData.map((item, index) => (
            <div
              key={index}
              style={wellnessItemStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,62,80,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(44,62,80,0.10), 0 1.5px 8px rgba(44,62,80,0.08)';
              }}
            >
              {item.icon}
              <h3 style={wellnessItemTitleStyle}>{item.title}</h3>
              <p style={wellnessItemDescriptionStyle}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={facilitatorInfoStyle}>
          <p>
            External facilitators are often on-site, offering a variety of guided experiences.
            Check for details on the facilitators present during your visit, & book a session in advance!
          </p>
        </div>
      </div>
      {/* Keyframes and responsive grid */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: none;}
          }
          @keyframes float {
            0% { transform: translateY(0px) scale(1);}
            100% { transform: translateY(-30px) scale(1.08);}
          }
          @media (min-width: 700px) {
            .wellness-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WellnessSection;
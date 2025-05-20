import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Inline SVG Icon components (no external images needed)
const LakesideIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="38" rx="16" ry="7" fill="#b2dfdb"/>
    <path d="M10 38 Q25 20 40 38" stroke="#388e3c" strokeWidth="2" fill="none"/>
    <circle cx="25" cy="30" r="6" fill="#4fc3f7" opacity="0.7"/>
    <ellipse cx="25" cy="38" rx="8" ry="3" fill="#4fc3f7" opacity="0.3"/>
  </svg>
);
const HilltopIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="40" rx="16" ry="7" fill="#c8e6c9"/>
    <polygon points="10,40 25,15 40,40" fill="#388e3c" />
    <polygon points="18,40 25,25 32,40" fill="#81c784" />
    <circle cx="25" cy="22" r="3" fill="#fffde7" />
  </svg>
);
const SafariIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="40" rx="16" ry="7" fill="#ffe082"/>
    <rect x="12" y="30" width="26" height="8" rx="4" fill="#8d6e63"/>
    <rect x="18" y="26" width="14" height="8" rx="4" fill="#bcaaa4"/>
    <circle cx="20" cy="38" r="2" fill="#424242"/>
    <circle cx="30" cy="38" r="2" fill="#424242"/>
    <ellipse cx="25" cy="40" rx="8" ry="3" fill="#ffecb3" opacity="0.3"/>
  </svg>
);
const CampsiteActivitiesIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" style={{ marginBottom: '10px' }} fill="none">
    <ellipse cx="25" cy="40" rx="16" ry="7" fill="#ffe0b2"/>
    <polygon points="25,18 38,40 12,40" fill="#ffb300"/>
    <rect x="22" y="28" width="6" height="12" rx="3" fill="#6d4c41"/>
    <circle cx="25" cy="24" r="3" fill="#fffde7"/>
  </svg>
);

const AdventureSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Rich natural gradient background 
  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: 'clamp(60px, 10vh, 100px) 20px',
    background: 'linear-gradient(135deg, #e8f5e9 0%, #dbf0df 50%, #e3ffe6 100%)',
  };

  const headerContainerStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
    zIndex: 3,
  };

  const mainTitleStyle = {
    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
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
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.17, 0.67, 0.35, 1.25)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#2E7D32',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
    fontWeight: 400,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.8s ease 0.2s',
  };

  // Horizontal layout with 4 equal cards for desktop
  const adventureGridStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 'clamp(20px, 3vw, 30px)',
    maxWidth: '1400px',
    margin: '0 auto 60px auto',
    justifyContent: 'center',
  };

  const adventureItemStyle = {
    background: 'rgba(255,255,255,0.98)',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(46,125,50,0.10), 0 1.5px 8px rgba(46,125,50,0.08)',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
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
    transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
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

  const contentContainerStyle = {
    padding: '24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const adventureItemTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: '12px',
    position: 'relative',
  };

  // Style for the title underline accent
  const titleAccentStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-6px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '3px',
    background: 'linear-gradient(90deg, #66BB6A 0%, #388E3C 100%)',
    borderRadius: '10px',
  };

  const adventureItemDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.7',
    flex: 1,
    marginBottom: '20px',
  };

  const buttonStyle = {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #43A047 0%, #2E7D32 100%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 10px rgba(46,125,50,0.2)',
    marginTop: 'auto',
  };

  const supervisionInfoStyle = {
    background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
    padding: 'clamp(25px, 5vw, 35px)',
    borderRadius: '16px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '1.05rem',
    color: '#1B5E20',
    lineHeight: '1.7',
    boxShadow: '0 8px 30px rgba(46,125,50,0.12)',
    border: '1px solid rgba(165,214,167,0.5)',
    position: 'relative',
    zIndex: 2,
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease 0.4s, transform 0.8s cubic-bezier(0.17, 0.67, 0.35, 1.25) 0.4s',
  };

  const iconStyle = {
    display: 'block',
    margin: '0 auto 15px auto',
    opacity: 0.9,
  };

  const floatingShapeStyle = (top, left, size, color, blur = 0.5, delay = 0) => ({
    position: 'absolute',
    top,
    left,
    width: size,
    height: size,
    background: color,
    borderRadius: '50%',
    filter: `blur(${blur}rem)`,
    opacity: 0.25,
    zIndex: 0,
    animation: `float 10s ease-in-out ${delay}s infinite alternate`,
  });

  const adventureData = [
    {
      image: '/images/lakeside.png',
      icon: <LakesideIcon />,
      title: "Lakeside Excursion",
      description: "Take a dip, cast off on a boat, wink at the fish & ducks, picnic on the shore by the pristine waters.",
      link: '/lakeside',
    },
    {
      image: '/images/hilltop.webp',
      icon: <HilltopIcon />,
      title: "Hill-top Expedition",
      description: "Thrilling trails, stunning vistas & panoramic views of the Ghats: all in easy reach from our campsite.",
      link: '/hilltop',
    },
    {
      image: '/images/safari.webp',
      icon: <SafariIcon />,
      title: "Jungle Safari",
      description: "A jeep ride & a hike through verdant forests. Waterfalls, birdsong, & the thrill of the wild!",
      link: '/hilltop',
    },
    {
      image: '/images/campsite.webp',
      icon: <CampsiteActivitiesIcon />,
      title: "Campsite Activities",
      description: "Pitch a tent, light a bonfire, play games, attend a workshop...or simply relax & soak in the magic!",
      link: '/campsite',
    },
  ];

  // Hover effects
  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'translateY(-12px)';
    card.style.boxShadow = '0 20px 40px rgba(46,125,50,0.18)';
    
    // Find and animate the image
    const image = card.querySelector('.adventure-image');
    if (image) image.style.transform = 'scale(1.08)';
    
    // Find and animate the overlay
    const overlay = card.querySelector('.image-overlay');
    if (overlay) overlay.style.opacity = '0.4';
    
    // Find and animate the button
    const button = card.querySelector('.adventure-button');
    if (button) {
      button.style.transform = 'translateY(-3px)';
      button.style.boxShadow = '0 10px 20px rgba(46,125,50,0.3)';
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.boxShadow = '0 8px 32px rgba(46,125,50,0.10), 0 1.5px 8px rgba(46,125,50,0.08)';
    
    // Reset image
    const image = card.querySelector('.adventure-image');
    if (image) image.style.transform = 'scale(1)';
    
    // Reset overlay
    const overlay = card.querySelector('.image-overlay');
    if (overlay) overlay.style.opacity = '0.7';
    
    // Reset button
    const button = card.querySelector('.adventure-button');
    if (button) {
      button.style.transform = '';
      button.style.boxShadow = '0 4px 10px rgba(46,125,50,0.2)';
    }
  };

  return (
    <section style={sectionStyle} id="adventure-section">
      {/* Floating decorative shapes */}
      <div style={floatingShapeStyle('12%', '7%', '140px', '#b9f6ca', 1.2, 0)} />
      <div style={floatingShapeStyle('65%', '80%', '120px', '#a5d6a7', 1.4, 0.3)} />
      <div style={floatingShapeStyle('38%', '60%', '90px', '#69f0ae', 1.1, 0.6)} />
      <div style={floatingShapeStyle('18%', '85%', '100px', '#e0f2f1', 1.3, 0.9)} />
      <div style={floatingShapeStyle('80%', '10%', '110px', '#c8e6c9', 1.5, 1.2)} />
      
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={headerContainerStyle}>
          <h2 style={mainTitleStyle}>Experience ADVENTURE</h2>
          <p style={subtitleStyle}>Immerse yourself in our handcrafted nature experiences, designed to reconnect you with the wild</p>
        </div>

        <div style={adventureGridStyle} className="adventure-grid">
          {adventureData.map((item, index) => (
            <div
              key={index}
              style={{
                ...adventureItemStyle,
                transitionDelay: `${0.1 + index * 0.1}s`
              }}
              onClick={() => navigate(item.link)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="adventure-item"
            >
              <div style={imageContainerStyle}>
                <img src={item.image} alt={item.title} className="adventure-image" style={imageStyle} />
                <div className="image-overlay" style={imageOverlayStyle}></div>
              </div>
              
              <div style={contentContainerStyle}>
                <div style={iconStyle}>{item.icon}</div>
                <h3 style={adventureItemTitleStyle}>
                  {item.title}
                  <span style={titleAccentStyle}></span>
                </h3>
                <p style={adventureItemDescriptionStyle}>{item.description}</p>
                <button className="adventure-button" style={buttonStyle}>
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={supervisionInfoStyle}>
          <p>
            <strong>Safety First: </strong>
            All adventures are supervised & guided by our enthusiastic and responsible
            in-house team. Rest assured, your safety & comfort are our topmost priorities.
          </p>
        </div>
      </div>
      
      {/* Keyframes and responsive styling */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px);}
            100% { transform: translateY(-30px);}
          }

          .adventure-grid {
            display: flex;
            flex-wrap: wrap;
          }
          
          .adventure-item {
            flex: 1 1 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
          
          @media (min-width: 768px) {
            .adventure-item {
              flex: 1 1 320px;
              max-width: 320px;
            }
          }
          
          @media (min-width: 1200px) {
            .adventure-grid {
              flex-wrap: nowrap;
            }
            
            .adventure-item {
              flex: 1;
            }
          }
          
          @media (hover: hover) {
            .adventure-button:hover {
              background: linear-gradient(90deg, #4CAF50 0%, #388E3C 100%);
            }
          }
          
          @media (max-width: 767px) {
            .adventure-item {
              max-width: 400px;
              margin-left: auto;
              margin-right: auto;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AdventureSection;
import React, { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mobile-first approach with better responsiveness
  const sectionStyle = {
    padding: 'clamp(30px, 5vh, 60px) clamp(15px, 4vw, 25px)', 
    background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f7f0 100%)',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box', // Ensure padding is included in width
  };

  const pageTitleStyle = {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', // Reduced size for mobile
    fontWeight: 800,
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 'clamp(1.2rem, 3vh, 2rem)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    maxWidth: '100%', // Ensure title doesn't overflow
    wordWrap: 'break-word', // Allow breaking long words
  };

  const contentContainerStyle = {
    width: '100%', // Full width on mobile
    maxWidth: '900px',
    margin: '0 auto',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
    boxSizing: 'border-box', // Ensure proper sizing
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    padding: 'clamp(1.2rem, 5vw, 2rem)', // Responsive padding
    marginBottom: 'clamp(1.2rem, 4vh, 2rem)',
    textAlign: 'left',
    lineHeight: 1.7,
    width: '100%',
    boxSizing: 'border-box',
    color: '#333',
    borderLeft: '4px solid #2E7D32',
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', // Smaller on mobile
    fontWeight: 700,
    color: '#1B5E20',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const paragraphStyle = {
    marginBottom: '1.2rem',
    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
    lineHeight: 1.6,
    color: '#444',
  };

  // Fix for the family section layout
  const familySectionStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack vertically on mobile
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    boxSizing: 'border-box',
  };

  // Fixed image sizing for better mobile display
  const familyImageStyle = {
    width: '100%', 
    maxWidth: '280px', // Smaller max width on mobile
    height: 'auto', // Maintain aspect ratio
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    objectFit: 'cover',
  };

  const familyTextStyle = {
    width: '100%',
    textAlign: 'center', // Center on mobile
  };

  const quoteTextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#388E3C',
    fontStyle: 'italic',
    lineHeight: 1.6,
    padding: '0.8rem',
  };

  const inviteTextStyle = {
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
    lineHeight: 1.7,
    padding: '0.8rem',
  };

  // Media query handling with matchMedia instead of window.innerWidth directly
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      
      const handleResize = (e) => {
        setIsDesktop(e.matches);
      };
      
      // Modern browsers
      mediaQuery.addEventListener("change", handleResize);
      
      // Initial check
      setIsDesktop(mediaQuery.matches);
      
      // Cleanup
      return () => {
        mediaQuery.removeEventListener("change", handleResize);
      };
    }
  }, []);

  // Apply desktop styles conditionally
  const desktopFamilySectionStyle = isDesktop ? {
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'flex-start',
    gap: '2rem',
  } : {};
  
  const desktopFamilyImageStyle = isDesktop ? {
    maxWidth: '320px',
  } : {};
  
  const desktopFamilyTextStyle = isDesktop ? {
    textAlign: 'left',
  } : {};

  return (
    <section style={sectionStyle}>      
      <h1 style={pageTitleStyle}>About JSOT Glamping</h1>

      <div style={contentContainerStyle}>
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Our Story & Vision</h2>
          <p style={paragraphStyle}>
            Welcome to <strong>JSOT (Jackuline School of Thought) Glamping</strong>, established in 2021. We are a passionate, family-operated venture born from a deep commitment to a holistic and sustainable way of living. Our home is the beautiful and quaint village of Katarkhadak, Maharashtra—just 30 kms from Pune city.
          </p>
          <p style={paragraphStyle}>
            At JSOT, we cherish the simple joys of life, the invigorating thrill of the breathtaking outdoors, and fostering genuine connections with nature and our community. The stunning lake and majestic mountain views that surround us are not just a backdrop; they are a constant source of inspiration and delight, shaping every unique off-the-grid experience we offer.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{...familySectionStyle, ...desktopFamilySectionStyle}}>
            <img
              src="/images/jsot_family_page19.png"
              alt="The JSOT Family and Team"
              style={{...familyImageStyle, ...desktopFamilyImageStyle}}
            />
            <div style={{...familyTextStyle, ...desktopFamilyTextStyle}}>
              <h3 style={{...sectionTitleStyle, textAlign: isDesktop ? 'left' : 'center' }}>
                A Family's Dream, Shared with You
              </h3>
              <p style={paragraphStyle}>
                As a family, we've poured our hearts into creating a unique space where guests can disconnect from the mundane and reconnect with themselves and the natural world. The local village community is an integral part of our JSOT family, actively participating in our operations and sharing their rich culture and warmth.
              </p>
              <p style={paragraphStyle}>
                We believe in creating memorable stays that are both luxurious and deeply rooted in eco-friendly practices. It's this blend of comfort, adventure, and responsible tourism that defines the JSOT experience.
              </p>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={quoteTextStyle}>
            "The simple joys of our lifestyle, the thrill of the breathtaking outdoors & an unparalleled Glamping experience are our offerings to you at our campsite!"
          </div>
          
          <div style={inviteTextStyle}>
            We warmly invite you to experience JSOT Glamping – a place where luxury meets wilderness, and where every stay contributes to a sustainable and enriching journey.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
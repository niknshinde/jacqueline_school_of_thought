import React from 'react';

const ContactPage = () => {
  // Base styles with mobile-first approach
  const pageStyle = {
    padding: 'clamp(60px, 15vh, 100px) clamp(15px, 5vw, 30px) clamp(40px, 10vh, 60px)',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f0f9f0, #e0f5e0)',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  };

  // Decorative elements
  const decorStyle = {
    position: 'absolute',
    top: '5%',
    right: '5%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(102, 187, 106, 0.15) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
  };

  const decorStyle2 = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
  };

  const containerStyle = {
    maxWidth: '800px',
    width: '100%',
    padding: 'clamp(20px, 5vw, 40px)',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(209, 238, 209, 0.7)',
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s ease',
  };

  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: '#2e7d32',
    marginBottom: '1.5rem',
    fontWeight: '700',
    position: 'relative',
    paddingBottom: '15px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '4px',
    width: 'clamp(60px, 15vw, 80px)',
    background: 'linear-gradient(90deg, #66bb6a, #81c784)',
    borderRadius: '2px',
  };

  const textStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#4a6c4a',
    lineHeight: '1.8',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  };

  const contactBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(15px, 3vw, 25px)',
    padding: 'clamp(20px, 4vw, 30px)',
    backgroundColor: 'rgba(214, 242, 214, 0.4)',
    borderRadius: '16px',
    width: '100%',
    marginTop: '25px',
    boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.03)',
  };

  const contactItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(12px, 3vw, 20px)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
    border: '1px solid rgba(209, 238, 209, 0.5)',
    cursor: 'pointer',
  };

  // Event handlers for hover effect
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.06)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
  };

  const contactDetailStyle = {
    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
    color: '#2e7d32',
    margin: '0.5rem 0',
    fontWeight: '500',
    lineHeight: '1.5',
    // Handle long email addresses
    wordBreak: 'break-word',
    maxWidth: '100%',
  };

  const contactIconStyle = {
    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
    color: '#66bb6a',
    marginBottom: '10px',
    padding: '12px',
    backgroundColor: 'rgba(214, 242, 214, 0.5)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'clamp(50px, 12vw, 60px)',
    height: 'clamp(50px, 12vw, 60px)',
    transition: 'all 0.3s ease',
  };

  const socialBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(15px, 4vw, 25px)',
    marginTop: 'clamp(25px, 5vh, 35px)',
  };

  const socialIconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'clamp(45px, 10vw, 55px)',
    height: 'clamp(45px, 10vw, 55px)',
    borderRadius: '50%',
    backgroundColor: 'rgba(214, 242, 214, 0.5)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
    textDecoration: 'none',
  };

  // Social hover handlers - simplified version
  const handleSocialMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.backgroundColor = 'rgba(214, 242, 214, 0.9)';
    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.08)';
  };

  const handleSocialMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = 'rgba(214, 242, 214, 0.5)';
    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
  };

  // Contact label for better readability
  const contactLabelStyle = {
    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
    color: '#638363',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0',
  };

  // Elegant email display style
  const emailWrapperStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const emailDisplayStyle = {
    fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
    color: '#2e7d32',
    fontWeight: '500',
    lineHeight: '1.5',
    wordBreak: 'break-word',
    textAlign: 'center',
    maxWidth: '100%',
    padding: '0 10px',
  };

  return (
    <div style={pageStyle}>
      {/* Decorative elements */}
      <div style={decorStyle}></div>
      <div style={decorStyle2}></div>
      
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          Get In Touch
          <div style={headingAfterStyle}></div>
        </h1>
        
        <p style={textStyle}>
          We'd love to hear from you! Whether you have questions, want to book your stay, 
          or just want to say hello, feel free to reach out to us at Jackuline School of Thought.
        </p>
        
        <div style={contactBoxStyle}>
          <div 
            style={contactItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={contactIconStyle}>
              📞
            </div>
            <p style={contactLabelStyle}>Phone</p>
            <p style={contactDetailStyle}>+91 9607393939</p>
          </div>
          
          <div 
            style={contactItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={contactIconStyle}>
              ✉️
            </div>
            <p style={contactLabelStyle}>Email</p>
            <div style={emailWrapperStyle}>
              <p style={emailDisplayStyle}>jackulineschoolofthought@gmail.com</p>
            </div>
          </div>
          
          <div 
            style={contactItemStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={contactIconStyle}>
              📍
            </div>
            <p style={contactLabelStyle}>Address</p>
            <p style={contactDetailStyle}>Katarkhadak Village, Maharashtra 412108, India</p>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default ContactPage;
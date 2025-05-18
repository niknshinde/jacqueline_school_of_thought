import React from 'react';

const ContactPage = () => {
  const pageStyle = {
    padding: '100px 20px 60px 20px',
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to bottom, #f0f9f0, #e0f5e0)',
    fontFamily: "'Poppins', sans-serif"
  };

  const containerStyle = {
    maxWidth: '800px',
    width: '100%',
    padding: '40px',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(209, 238, 209, 0.7)'
  };

  const headingStyle = {
    fontSize: '3rem',
    color: '#2e7d32',
    marginBottom: '1.5rem',
    fontWeight: '600',
    position: 'relative',
    paddingBottom: '15px'
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '3px',
    width: '80px',
    backgroundColor: '#66bb6a'
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#4a6c4a',
    maxWidth: '600px',
    lineHeight: '1.8',
    marginBottom: '2rem'
  };

  const contactBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '30px',
    backgroundColor: 'rgba(214, 242, 214, 0.5)',
    borderRadius: '12px',
    width: '100%',
    marginTop: '20px'
  };

  const contactItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    ':hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    }
  };

  const contactDetailStyle = {
    fontSize: '1.1rem',
    color: '#2e7d32',
    margin: '0.5rem 0',
    fontWeight: '500'
  };

  const contactIconStyle = {
    fontSize: '2rem',
    color: '#66bb6a',
    marginBottom: '10px'
  };

  const socialBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px'
  };

  const socialIconStyle = {
    fontSize: '2rem',
    color: '#2e7d32',
    transition: 'transform 0.3s ease, color 0.3s ease',
    ':hover': {
      transform: 'scale(1.2)',
      color: '#4caf50'
    }
  };

  return (
    <div style={pageStyle}>
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
          <div style={contactItemStyle}>
            <i className="fas fa-phone" style={contactIconStyle}></i>
            <p style={contactDetailStyle}>+91 9607393939</p>
          </div>
          
          <div style={contactItemStyle}>
            <i className="fas fa-envelope" style={contactIconStyle}></i>
            <p style={contactDetailStyle}>jackulineschoolofthought@gmail.com</p>
          </div>
          
          <div style={contactItemStyle}>
            <i className="fas fa-map-marker-alt" style={contactIconStyle}></i>
            <p style={contactDetailStyle}>Katarkhadak Village, Maharashtra 412108, India</p>
          </div>
        </div>
        
        <div style={socialBoxStyle}>
          <a href="#" style={socialIconStyle} aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" style={socialIconStyle} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React, { useState, useEffect } from 'react';

const HilltopPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const isMobile = windowWidth < 768;
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Animation helpers
  const fadeIn = {
    opacity: isVisible['hero-section'] ? 1 : 0,
    transform: isVisible['hero-section'] ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  };

  const staggeredFadeIn = (delay) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`,
  });

  return (
    <div style={{
      overflow: 'hidden',
      backgroundColor: '#f8f9fa',
      backgroundImage: 'linear-gradient(135deg, rgba(231, 244, 253, 0.8) 0%, rgba(240, 250, 244, 0.8) 100%)',
      paddingTop: '90px', // Add padding to prevent navbar overlap
      marginTop: '0',     // Optional: adjust if your navbar uses margin
    }}>
      {/* Hero Section */}
      <div id="hero-section" className="animate-section" style={{
        position: 'relative',
        height: 'clamp(300px, 60vh, 600px)',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: 'url("/images/hilltop.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(2px)',
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 20px',
          maxWidth: '800px',
          textAlign: 'center',
          ...fadeIn,
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '800',
            margin: '0 0 20px 0',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            letterSpacing: '1px',
          }}>
            Embark on a Hilltop Adventure
          </h1>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #16a085, #2ecc71)',
            margin: '0 auto 20px auto',
            borderRadius: '2px',
          }}></div>
          
          <p style={{
            color: '#ffffff',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: '400',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Step out from Jackuline School of Thought and discover breathtaking views, serene nature, and invigorating trails
          </p>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '70px',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23f8f9fa\' fill-opacity=\'1\' d=\'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}></div>
      </div>

      {/* Content Container */}
      <div style={{
        padding: 'clamp(20px, 5vw, 60px)',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: '"Nunito", "Segoe UI", Arial, sans-serif',
        color: '#2c3e50',
        marginTop: '0',      
        paddingTop: '0',     
      }}>
        {/* Introduction */}
        <div id="intro-section" className="animate-section" style={{
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '16px',
          padding: 'clamp(15px, 5vw, 30px)',
          marginTop: '40px',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid rgba(230,230,230,0.7)',
          backdropFilter: 'blur(10px)',
          opacity: isVisible['intro-section'] ? 1 : 0,
          transform: isVisible['intro-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            lineHeight: '1.7',
            marginBottom: '15px',
          }}>
            Step out from Jackuline School of Thought (JSOT) and almost immediately find yourself on a path leading to an incredible hilltop expedition! This is your chance to easily access breathtaking views, serene nature, and invigorating trails without venturing far. Perfect for guests looking to blend relaxation with a touch of adventure.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginTop: '25px',
          }}>
            <a href="#/" style={{
              display: 'inline-block',
              padding: '12px 25px',
              background: 'linear-gradient(135deg, #16a085 0%, #2ecc71 100%)',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(46, 204, 113, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(46, 204, 113, 0.4)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(46, 204, 113, 0.3)';
            }}>
              Explore Highlights
            </a>
            
            <a href="https://maps.app.goo.gl/MeBbqR1PXapJPHwW6" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '12px 25px',
              background: 'white',
              color: '#16a085',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(22, 160, 133, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <span style={{ marginRight: '8px' }}>📍</span> View on Map
            </a>
          </div>
        </div>

        {/* First Image with Caption - Card Style */}
        <div id="main-image-section" className="animate-section" style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
          marginBottom: '50px',
          position: 'relative',
          opacity: isVisible['main-image-section'] ? 1 : 0,
          transform: isVisible['main-image-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s',
        }}>
          <img
            src="/images/hilltop.webp"
            alt="People trekking on a lush green path near JSOT"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
            onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.03)'}}
            onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'}}
          />
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            padding: 'clamp(15px, 3vw, 25px)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
            color: 'white',
          }}>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: '700',
            }}>Your Gateway to Adventure</h3>
            <p style={{
              margin: '0',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              opacity: '0.9',
            }}>Your scenic trek begins just moments from JSOT</p>
          </div>
        </div>

        {/* Highlights Section */}
        <div id="discover" className="animate-section" style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          marginBottom: '50px',
          opacity: isVisible['discover'] ? 1 : 0,
          transform: isVisible['discover'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #16a085 0%, #2ecc71 100%)',
            padding: 'clamp(15px, 3vw, 25px)',
            color: 'white',
          }}>
            <h2 style={{
              margin: '0',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ marginRight: '12px', fontSize: '1.3em' }}>⛰️</span>
              Discover the Beauty Above
            </h2>
          </div>
          
          <div style={{ padding: 'clamp(15px, 3vw, 30px)' }}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: '1.7',
              marginBottom: '20px',
            }}>
              The hills surrounding Katarkhadak offer a rejuvenating escape. As you ascend, you'll be greeted by:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(15px, 3vw, 25px)',
              marginBottom: '30px',
            }}>
              {[
                {
                  icon: '🏞️',
                  title: 'Sweeping Panoramic Views',
                  description: 'Gaze out over the rolling Western Ghats, verdant valleys, and sometimes even glimpses of nearby lakes.'
                },
                {
                  icon: '🌱',
                  title: 'Lush Greenery & Paddy Fields',
                  description: 'Especially vibrant during and after the monsoons, the landscape is a tapestry of greens.'
                },
                {
                  icon: '🌫️',
                  title: 'Atmospheric Misty Mornings',
                  description: 'Experience the magic of the hills as mist gently rolls through, creating an ethereal atmosphere.'
                },
                {
                  icon: '🦋',
                  title: 'Rich Biodiversity',
                  description: 'Keep an eye out for local flora and fauna as you walk through these natural trails.'
                },
                {
                  icon: '📸',
                  title: 'Unforgettable Photo Opportunities',
                  description: 'Every turn offers a new vista perfect for capturing memories.'
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(236, 240, 241, 0.5)',
                  borderRadius: '12px',
                  padding: 'clamp(15px, 3vw, 25px)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '1px solid rgba(230,230,230,0.7)',
                  opacity: isVisible['discover'] ? 1 : 0,
                  transform: isVisible['discover'] ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${0.4 + index * 0.1}s, transform 0.4s ease ${0.4 + index * 0.1}s`,
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <span style={{ fontSize: '2.5rem', marginBottom: '15px', display: 'block' }}>{feature.icon}</span>
                  <h3 style={{ margin: '0 0 10px 0', fontWeight: '700', color: '#16a085' }}>{feature.title}</h3>
                  <p style={{ margin: '0', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <h2 id="gallery-title" className="animate-section" style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          textAlign: 'center',
          marginBottom: '25px',
          color: '#2c3e50',
          fontWeight: '800',
          opacity: isVisible['gallery-title'] ? 1 : 0,
          transform: isVisible['gallery-title'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.4s ease 0.5s, transform 0.4s ease 0.5s',
        }}>
          Scenic Wonders Await
        </h2>
        
        <div id="gallery-section" className="animate-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(15px, 3vw, 25px)',
          marginBottom: '50px',
          opacity: isVisible['gallery-section'] ? 1 : 0,
          transform: isVisible['gallery-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.4s ease 0.6s, transform 0.4s ease 0.6s',
        }}>
          {/* Gallery Images */}
          {[
            {
              src: "/images/hilltop_paddy_fields.webp",
              alt: "Lush green terraced paddy fields on the hillside",
              caption: "Vibrant terraced fields paint the landscape"
            },
            {
              src: "/images/hilltop_misty_view.webp",
              alt: "Misty view of the hills, showcasing a serene atmosphere",
              caption: "Experience the tranquil beauty of misty mornings"
            },
            {
              src: "/images/hilltop_lake_view.webp",
              alt: "View of a lake and hills from a high vantage point",
              caption: "Stunning vistas await, sometimes including serene lake views"
            }
          ].map((image, index) => (
            <div key={index} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              height: '0',
              paddingBottom: '75%', // 4:3 aspect ratio
              backgroundColor: '#f0f0f0',
              opacity: isVisible['gallery-section'] ? 1 : 0,
              transform: isVisible['gallery-section'] ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${0.7 + index * 0.1}s, transform 0.4s ease ${0.7 + index * 0.1}s`, 
            }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.1)'}}
                onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'}}
              />
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                padding: '15px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                color: 'white',
                zIndex: '1',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}>
                <p style={{ margin: '0', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '500' }}>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial/Quote Section */}
        <div id="quote-section" className="animate-section" style={{
          background: 'linear-gradient(135deg, #1abc9c 0%, #3498db 100%)',
          borderRadius: '16px',
          padding: 'clamp(25px, 5vw, 40px)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '50px',
          boxShadow: '0 15px 35px rgba(26, 188, 156, 0.25)',
          opacity: isVisible['quote-section'] ? 1 : 0,
          transform: isVisible['quote-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            zIndex: 0,
          }}></div>
          
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '10px', zIndex: 1, position: 'relative' }}>
            ⛰️
          </span>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            lineHeight: '1.7',
            marginBottom: '15px',
            fontStyle: 'italic',
            fontWeight: '300',
            zIndex: 1,
            position: 'relative',
          }}>
            "Whether you're an avid trekker, a nature lover, or simply seeking a peaceful walk with stunning scenery, 
            this hilltop adventure offers a perfect escape. The rolling Western Ghats create a truly magical atmosphere, 
            especially during and after the monsoons when nature comes alive."
          </p>
          
          <div style={{
            width: '50px',
            height: '3px',
            background: 'rgba(255,255,255,0.5)',
            margin: '15px auto',
            zIndex: 1,
            position: 'relative',
          }}></div>
          
          <p style={{
            fontWeight: '700',
            marginBottom: '0',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            zIndex: 1,
            position: 'relative',
          }}>
            The Adventure Lovers at JSOT
          </p>
        </div>

        {/* Location Section */}
        <div id="location-section" className="animate-section" style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          marginBottom: '50px',
          opacity: isVisible['location-section'] ? 1 : 0,
          transform: isVisible['location-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.9s, transform 0.8s ease 0.9s',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
            padding: 'clamp(15px, 3vw, 25px)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '10px' : '0',
          }}>
            <h2 style={{
              margin: isMobile ? '0 0 10px 0' : '0',
              width: isMobile ? '100%' : 'auto',
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ marginRight: '12px', fontSize: '1.2em' }}>📍</span>
              Finding the Trailhead
            </h2>
            
            <a href="https://maps.app.goo.gl/MeBbqR1PXapJPHwW6" target="_blank" rel="noopener noreferrer" style={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              background: 'rgba(255,255,255,0.2)',
              padding: '8px 15px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              transition: 'background 0.3s',
            }} onMouseOver={(e) => {e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}}
               onMouseOut={(e) => {e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}}>
              Open in Google Maps
              <span style={{ marginLeft: '8px', fontSize: '0.9em' }}>➚</span>
            </a>
          </div>
          
          <div style={{ padding: '20px' }}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: '1.7',
              marginBottom: '20px',
            }}>
              The trailhead is easily accessible, located just behind Jackuline School of Thought. Follow the path upwards and let nature guide you to breathtaking vistas!
            </p>
            
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            }}>
              <img 
                src='/images/hilltop_map.png' 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                }} 
                alt="Map showing trailhead location behind JSOT"
              />
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '15px',
              marginTop: '25px',
              padding: '10px',
              background: 'rgba(236, 240, 241, 0.5)',
              borderRadius: '8px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              }}>
                <span style={{ color: '#e74c3c', marginRight: '8px', fontSize: '1.2em' }}>📌</span>
                Located just behind JSOT, Katarkhadak
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              }}>
                <span style={{ color: '#3498db', marginRight: '8px', fontSize: '1.2em' }}>🚶</span>
                Easy walking distance from your stay
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div id="cta-section" className="animate-section" style={{
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '50px',
          opacity: isVisible['cta-section'] ? 1 : 0,
          transform: isVisible['cta-section'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 1s, transform 0.8s ease 1s',
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            color: '#2c3e50',
            marginBottom: '20px',
            fontWeight: '800',
          }}>
            Ready for an Unforgettable Adventure?
          </h2>
          
         <a href="#/book" style={{
  display: 'inline-block',
  padding: '15px 35px',
  background: 'linear-gradient(135deg, #16a085 0%, #2ecc71 100%)',
  color: 'white',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  boxShadow: '0 10px 25px rgba(46, 204, 113, 0.4)',
  transition: 'transform 0.3s, box-shadow 0.3s',
}} onMouseOver={(e) => {
  e.currentTarget.style.transform = 'translateY(-5px)';
  e.currentTarget.style.boxShadow = '0 15px 30px rgba(46, 204, 113, 0.5)';
}} onMouseOut={(e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 10px 25px rgba(46, 204, 113, 0.4)';
}}>
  Book Your Stay Now
</a>

<p style={{
  margin: '20px auto 0',
  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
  maxWidth: '600px',
  color: '#7f8c8d',
}}>
  Don't miss the opportunity to explore these natural wonders during your visit to JSOT
</p>
</div>
      
      {/* Tips and Recommendations Section */}
      <div id="tips-section" className="animate-section" style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        marginBottom: '50px',
        opacity: isVisible['tips-section'] ? 1 : 0,
        transform: isVisible['tips-section'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease 1.1s, transform 0.8s ease 1.1s',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          padding: 'clamp(15px, 3vw, 25px)',
          color: 'white',
        }}>
          <h2 style={{
            margin: '0',
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span style={{ marginRight: '12px', fontSize: '1.2em' }}>💡</span>
            Helpful Tips For Your Trek
          </h2>
        </div>
        
        <div style={{ padding: 'clamp(15px, 3vw, 30px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(15px, 3vw, 25px)',
          }}>
            {[
              {
                icon: '👟',
                title: 'Wear Comfortable Shoes',
                description: 'The trail can be uneven in places. Good walking shoes are recommended.'
              },
              {
                icon: '🌞',
                title: 'Sun Protection',
                description: 'Bring sunscreen, a hat, and sunglasses, especially during daytime treks.'
              },
              {
                icon: '💧',
                title: 'Stay Hydrated',
                description: 'Carry water with you to stay refreshed throughout your adventure.'
              },
              
            ].map((tip, index) => (
              <div key={index} style={{
                background: 'rgba(236, 240, 241, 0.5)',
                borderRadius: '12px',
                padding: 'clamp(15px, 3vw, 25px)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: '1px solid rgba(230,230,230,0.7)',
                opacity: isVisible['tips-section'] ? 1 : 0,
                transform: isVisible['tips-section'] ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.8s ease ${1.2 + index * 0.1}s, transform 0.8s ease ${1.2 + index * 0.1}s`,
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '15px', display: 'block' }}>{tip.icon}</span>
                <h3 style={{ margin: '0 0 10px 0', fontWeight: '700', color: '#e67e22' }}>{tip.title}</h3>
                <p style={{ margin: '0', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div id="footer-section" className="animate-section" style={{
        textAlign: 'center',
        padding: '20px 0 40px',
        opacity: isVisible['footer-section'] ? 1 : 0,
        transform: isVisible['footer-section'] ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease 1.3s, transform 0.8s ease 1.3s',
      }}>
        <p style={{
          margin: '0',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          color: '#7f8c8d',
        }}>
          © {new Date().getFullYear()} Jackuline School of Thought. All rights reserved.
        </p>
        <p style={{
          margin: '10px 0 0',
          fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
          color: '#95a5a6',
        }}>
          Photos and content are property of JSOT. Adventure responsibly!
        </p>
      </div>
    </div>
  </div>
  );
};

export default HilltopPage;
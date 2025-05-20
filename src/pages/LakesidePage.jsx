import React, { useState, useEffect } from 'react';

const LakesidePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation helpers
  const fadeIn = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
  };

  const staggeredFadeIn = (delay) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
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
      <div style={{
        position: 'relative',
        height: 'clamp(300px, 50vh, 500px)',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: 'url("/images/khatarnak_dam_lush_waterfall.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
            Adventure Awaits at Khatarnak Dam!
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
            Escape the ordinary and dive into an unforgettable experience just steps away from Jackuline School of Thought
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
        marginTop: '0',      // Add marginTop if needed
        paddingTop: '0',     // Already handled by parent, but can be adjusted
      }}>
        {/* Introduction */}
        <div style={{
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '16px',
          padding: 'clamp(15px, 5vw, 30px)',
          marginTop: '40px',

          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          border: '1px solid rgba(230,230,230,0.7)',
          backdropFilter: 'blur(10px)',
          ...staggeredFadeIn(0.2),
        }}>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
            lineHeight: '1.7',
            marginBottom: '15px',
          }}>
            Escape the ordinary and dive into an unforgettable experience at Khatarnak Dam, located at
            <strong> JH4M+98, Katarkhadak, Maharashtra 412115</strong>.
            This hidden gem is just a short <strong>300-meter stroll</strong> from the
            Jackuline School of Thought (JSOT), Katarkhadak!
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginTop: '25px',
          }}>
            <a href="#/experiences" style={{
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
              Explore Activities
            </a>
            
            <a href="https://maps.app.goo.gl/4xshK7K2dPdxTP3u9" target="_blank" rel="noopener noreferrer" style={{
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
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 15px 45px rgba(0,0,0,0.1)',
          marginBottom: '50px',
          position: 'relative',
          ...staggeredFadeIn(0.4),
        }}>
          <img
            src="/images/khatarnak_dam_group_fun.webp"
            alt="Group having fun at Khatarnak Dam with life jackets"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.8s ease',
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
            }}>Making a Splash!</h3>
            <p style={{
              margin: '0',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              opacity: '0.9',
            }}>Unforgettable moments at Khatarnak Dam</p>
          </div>
        </div>

        {/* Activities and Features */}
        <div id="adventure" style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          marginBottom: '50px',
          ...staggeredFadeIn(0.6),
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
              <span style={{ marginRight: '12px', fontSize: '1.3em' }}>🌊</span>
              Your Safe & Thrilling Dam Adventure
            </h2>
          </div>
          
          <div style={{ padding: 'clamp(15px, 3vw, 30px)' }}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: '1.7',
              marginBottom: '20px',
            }}>
              Get ready to embrace the thrill of the water! We're here to make your visit both exciting and safe.
              We offer:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'clamp(15px, 3vw, 25px)',
              marginBottom: '30px',
            }}>
              {[
                {
                  icon: '🦺',
                  title: 'High-Quality Life Jackets',
                  description: 'Safety first! Enjoy the water with complete peace of mind.'
                },
                {
                  icon: '🧭',
                  title: 'Experienced Guides',
                  description: 'Our friendly guides ensure you can explore safely and discover the best spots.'
                },
                {
                  icon: '🌧️',
                  title: 'Monsoon Magic Waterfall',
                  description: 'Experience a spectacular natural waterfall during the rainy season.'
                }
              ].map((feature, index) => (
                <div key={index} style={{
                  background: 'rgba(236, 240, 241, 0.5)',
                  borderRadius: '12px',
                  padding: 'clamp(15px, 3vw, 25px)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '1px solid rgba(230,230,230,0.7)',
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
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          textAlign: 'center',
          marginBottom: '25px',
          color: '#2c3e50',
          fontWeight: '800',
          ...staggeredFadeIn(0.8),
        }}>
          Discover Nature's Beauty
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(15px, 3vw, 25px)',
          marginBottom: '50px',
          ...staggeredFadeIn(1),
        }}>
          {/* Gallery Images */}
          {[
            {
              src: "/images/adventure.webp",
              alt: "People sliding down the seasonal waterfall",
              caption: "Sliding into fun on the natural monsoon waterfall!"
            },
            {
              src: "/images/khatarnak_dam_lush_waterfall.webp",
              alt: "Lush green surroundings and waterfall",
              caption: "Nature's raw beauty during the monsoon season"
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
                  transition: 'transform 0.5s ease',
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
        <div style={{
          background: 'linear-gradient(135deg, #1abc9c 0%, #3498db 100%)',
          borderRadius: '16px',
          padding: 'clamp(25px, 5vw, 40px)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '50px',
          boxShadow: '0 15px 35px rgba(26, 188, 156, 0.25)',
          ...staggeredFadeIn(1.2),
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
            💦
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
            "Whether you're looking for a refreshing dip, a picturesque picnic spot, or a bit of adventure,
            Khatarnak Dam offers a perfect getaway. Especially during the monsoon, the vibrant greenery and gushing waters create a truly magical atmosphere."
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
            The Nature Lovers at JSOT
          </p>
        </div>

        {/* Location Section */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          marginBottom: '50px',
          ...staggeredFadeIn(1.4),
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
            padding: 'clamp(15px, 3vw, 25px)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <h2 style={{
              margin: '0',
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
            }}>
              <span style={{ marginRight: '12px', fontSize: '1.2em' }}>📍</span>
              How to Find Us
            </h2>
            
            <a href="https://maps.app.goo.gl/4xshK7K2dPdxTP3u9" target="_blank" rel="noopener noreferrer" style={{
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
              Katarkhadak is conveniently located just 300 meters from Jackuline School of Thought (JSOT) — your gateway to adventure!
            </p>
            
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            }}>
              <img 
                src='/images/khatarnak_dam_map.png' 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                }} 
                alt="Google Maps location of Khatarnak Dam"
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
                JH4M+98, Katarkhadak, Maharashtra 412115
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              }}>
                <span style={{ color: '#3498db', marginRight: '8px', fontSize: '1.2em' }}>🚶</span>
                Just 300m walk from JSOT
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          ...staggeredFadeIn(1.6),
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
            boxShadow: '0 10px 20px rgba(46, 204, 113, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            margin: '0 auto',
          }} onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(46, 204, 113, 0.4)';
          }} onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(46, 204, 113, 0.3)';
          }}>
            Book Your Stay Now!
          </a>
          
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: '#7f8c8d',
            marginTop: '15px',
          }}>
            Explore the beauty of Khatarnak Dam while staying at Jackuline School of Thought
          </p>
        </div>
      </div>
    </div>
  );
};

export default LakesidePage;
import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts to trigger animations
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const sectionStyle = {
    padding: 'clamp(40px, 8vh, 80px) 0',
    background: 'rgba(217, 237, 220, 0.85)', // Updated to the exact background color you specified
    minHeight: '100vh',
    textAlign: 'center',
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    overflow: 'hidden',
    position: 'relative',
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    color: '#1a2233',
    marginBottom: 'clamp(30px, 5vw, 50px)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #3a8a40 30%, #7cc476 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 2px 5px rgba(0,0,0,0.05)',
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(.17,.67,.35,1.25)',
  };

  // The gallery grid is defined in CSS, not here in JS
  const galleryGridStyle = {
    display: 'grid',
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 clamp(16px, 4vw, 32px)',
    position: 'relative',
    zIndex: 2,
    // The grid template columns are handled in the CSS for better responsiveness
  };

  const imageContainerStyle = (index) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '18px',
    boxShadow: '0 12px 28px rgba(31, 85, 45, 0.15)',
    aspectRatio: '4 / 3',
    background: '#fff',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
    opacity: isLoaded ? 1 : 0,
  });

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.65s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.5s ease',
    filter: 'brightness(1.02) saturate(1.05)',
    willChange: 'transform',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, rgba(20,48,30,0.25) 0%, rgba(255,255,255,0.04) 100%)',
    opacity: 0.5,
    pointerEvents: 'none',
    transition: 'opacity 0.4s ease',
    zIndex: 1,
  };

  const lightboxStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5,25,10,0.92)',
    display: selectedImage !== null ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    backdropFilter: 'blur(10px)',
    opacity: selectedImage !== null ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  const lightboxImageStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transform: selectedImage !== null ? 'scale(1)' : 'scale(0.9)',
    transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255,255,255,0.15)',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '20px',
    color: 'white',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  // Enhanced hover effects
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px) scale(1.035)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(31, 85, 45, 0.25)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1.12)';
    const overlay = e.currentTarget.querySelector('.img-overlay');
    if (overlay) overlay.style.opacity = 0.2;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 12px 28px rgba(31, 85, 45, 0.15)';
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1)';
    const overlay = e.currentTarget.querySelector('.img-overlay');
    if (overlay) overlay.style.opacity = 0.5;
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const images = [
    { src: '/images/gallery-dome-interior-beds.jpg', alt: 'Glamping dome interior with comfortable beds' },
    { src: '/images/gallery-dome-view.jpg', alt: 'Scenic view from inside a glamping dome' },
    { src: '/images/hero-background.jpg', alt: 'Outdoor view of dome and deluxe tents' },
    { src: '/images/gallery-dome-night.png', alt: 'Glamping dome illuminated at night' },
    { src: '/images/gallery-night-path.png', alt: 'Campsite pathway and tents at night' },
    { src: '/images/gallery-bonfire-group.png', alt: 'Guests enjoying a bonfire at the campsite' },
    { src: '/images/gallery-interior-detail.webp', alt: 'Elegant interior details of glamping accommodation' },
    { src: '/images/gallery-sunrise-view.webp', alt: 'Beautiful sunrise view from campsite' },
  ];

  const backgroundShapes = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  };

  const backgroundCircle1 = {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '40vw',
    height: '40vw',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(144,238,144,0.15) 0%, rgba(144,238,144,0) 70%)',
    filter: 'blur(40px)',
  };

  const backgroundCircle2 = {
    position: 'absolute',
    bottom: '-20%',
    left: '-10%',
    width: '50vw',
    height: '50vw',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(122,201,147,0.12) 0%, rgba(122,201,147,0) 60%)',
    filter: 'blur(45px)',
  };

  const styleSheet = `
    @keyframes fadeInImg {
      from { opacity: 0; transform: scale(1.06);}
      to { opacity: 1; transform: scale(1);}
    }
    
    .gallery-item {
      transition: transform 0.8s cubic-bezier(0.17, 0.67, 0.35, 1.25), 
                  opacity 0.8s ease, 
                  box-shadow 0.4s ease;
    }
    
    /* Staggered animation delays for gallery items */
    .gallery-item:nth-child(1) { transition-delay: 0.1s; }
    .gallery-item:nth-child(2) { transition-delay: 0.15s; }
    .gallery-item:nth-child(3) { transition-delay: 0.2s; }
    .gallery-item:nth-child(4) { transition-delay: 0.25s; }
    .gallery-item:nth-child(5) { transition-delay: 0.15s; }
    .gallery-item:nth-child(6) { transition-delay: 0.2s; }
    .gallery-item:nth-child(7) { transition-delay: 0.25s; }
    .gallery-item:nth-child(8) { transition-delay: 0.3s; }
    
    @media (hover: hover) {
      .gallery-item:hover {
        transform: translateY(-10px) scale(1.035);
        box-shadow: 0 20px 40px rgba(31, 85, 45, 0.25);
      }
      
      .gallery-item:hover img {
        transform: scale(1.12);
      }
      
      .gallery-item:hover .img-overlay {
        opacity: 0.2;
      }
    }
    
    /* Properly fixed responsive grid layout */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: clamp(15px, 3vw, 24px);
    }
    
    /* Large desktop and up */
    @media (min-width: 1201px) {
      .gallery-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    /* Medium desktop and tablets landscape */
    @media (max-width: 1200px) {
      .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    }
    
    /* Tablets portrait */
    @media (max-width: 900px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
      }
    }
    
    /* Mobile phones */
    @media (max-width: 520px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        max-width: 320px; 
        margin: 0 auto;
      }
      
      .gallery-item {
        aspect-ratio: 4/3;
      }
      
      /* Improve spacing on mobile */
      .section-title {
        margin-bottom: 25px;
      }
    }
    
    .close-button:hover {
      background: rgba(255,255,255,0.25);
      transform: scale(1.1);
    }
    
    .gallery-container {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .gallery-container.loaded {
      opacity: 1;
      transform: translateY(0);
    }
    
    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255,255,255,0.15);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 28px;
      transition: background 0.3s ease, transform 0.3s ease;
      z-index: 1001;
    }
    
    .lightbox-nav:hover {
      background: rgba(255,255,255,0.3);
      transform: translateY(-50%) scale(1.1);
    }
    
    .lightbox-prev {
      left: 20px;
    }
    
    .lightbox-next {
      right: 20px;
    }
    
    /* Subtle image entry animation */
    img {
      animation: fadeInImg 0.6s ease-out forwards;
    }
    
    /* Light glow effect only on hover, not constantly */
    .gallery-item:hover {
      box-shadow: 0 15px 35px rgba(31, 85, 45, 0.25);
    }
  `;

  // Handles navigation in lightbox
  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section style={sectionStyle}>
      <style>{styleSheet}</style>
      
      <div style={backgroundShapes}>
        <div style={backgroundCircle1}></div>
        <div style={backgroundCircle2}></div>
      </div>
      
      <h2 className="section-title" style={sectionTitleStyle}>A Glimpse of Your Escape</h2>
      
      <div className={`gallery-container ${isLoaded ? 'loaded' : ''}`}>
        <div className="gallery-grid" style={galleryGridStyle}>
          {images.map((image, index) => (
            <div 
              key={index}
              className="gallery-item"
              style={imageContainerStyle(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleImageClick(index)}
            >
              <span className="img-overlay" style={overlayStyle}></span>
              <img 
                src={image.src} 
                alt={image.alt} 
                style={imageStyle} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox for image preview with navigation */}
      <div 
        className="lightbox-backdrop"
        style={lightboxStyle} 
        onClick={closeLightbox}
      >
        {selectedImage !== null && (
          <>
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              style={lightboxImageStyle}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="close-button"
              style={closeButtonStyle} 
              onClick={closeLightbox}
            >
              ✕
            </button>
            <div className="lightbox-nav lightbox-prev" onClick={handlePrevImage}>
              ‹
            </div>
            <div className="lightbox-nav lightbox-next" onClick={handleNextImage}>
              ›
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
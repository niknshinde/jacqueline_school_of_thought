import React from 'react';

const BookPage = () => {
  const agodaLink = "https://www.agoda.com/en-in/jackuline-school-of-thought/hotel/all/kolvan-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-05-23&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false¤cyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=39022fe9-84b4-4566-b485-97765c4da483&ds=fTsa6qaO%2F4TpstZO";

  const pageStyle = {
    padding: '80px 10px 40px 10px',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(120deg, #e8f5e9 0%, #f1f8e9 100%)',
    overflowX: 'hidden', // Prevent horizontal scrolling
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 5vw, 3rem)',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '32px',
    fontWeight: '900',
    letterSpacing: '1px',
    padding: '0 10px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    textShadow: '0 2px 12px #fff, 0 2px 12px #e0f7fa',
  };

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 5px',
  };

  const cardStyle = (isExceeded) => ({
    background: 'rgba(255,255,255,0.97)',
    borderRadius: '16px',
    boxShadow: isExceeded
      ? '0 4px 24px rgba(46, 125, 50, 0.10), 0 1.5px 8px rgba(46, 125, 50, 0.08)'
      : '0 8px 32px rgba(46, 125, 50, 0.12), 0 1.5px 8px rgba(46, 125, 50, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: isExceeded ? '2px solid #a5d6a7' : '1.5px solid #81c784',
    opacity: isExceeded ? 0.7 : 1,
    transition: 'box-shadow 0.3s, border 0.3s, opacity 0.3s',
    position: 'relative',
    zIndex: 1,
    backdropFilter: 'blur(1.2px)',
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
  });

  const cardHeaderStyle = {
    background: 'linear-gradient(90deg, #81c784 60%, #c8e6c9 100%)',
    color: '#1b5e20',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textAlign: 'center',
    letterSpacing: '0.5px',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    boxShadow: '0 2px 8px rgba(129,199,132,0.09)',
  };

  const cardImageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    boxShadow: '0 2px 12px rgba(46,125,50,0.07)',
  };

  const cardTitleStyle = {
    fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
    fontWeight: '700',
    color: '#2e7d32',
    padding: '15px 10px 8px 10px',
    textAlign: 'center',
    borderBottom: '1px solid #e8f5e9',
    margin: 0,
    letterSpacing: '0.5px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    wordWrap: 'break-word',
  };

  const cardContentStyle = {
    padding: '15px 12px 0 12px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const featuresSectionStyle = {
    marginBottom: '15px',
  };

  const featuresListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '6px 10px',
  };

  const featureItemStyle = {
    fontSize: '0.9rem',
    color: '#333',
    marginBottom: '0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    letterSpacing: '0.01em',
  };

  const checkIconStyle = {
    color: '#2e7d32',
    marginRight: '6px',
    fontSize: '1em',
    fontWeight: 'bold',
  };

  const infoIconStyle = {
    color: '#7cb342',
    marginLeft: '3px',
    fontSize: '0.8em',
    cursor: 'pointer',
    opacity: 0.7,
  };

  const pricingAndCapacitySectionStyle = {
    textAlign: 'center',
    padding: '15px 0 10px 0',
    borderTop: '1px solid #e8f5e9',
    borderBottom: '1px solid #e8f5e9',
    marginBottom: '12px',
    background: 'rgba(232,245,233,0.13)',
    borderRadius: '8px',
  };

  const capacityIconStyle = {
    fontSize: '1.3rem',
    color: '#555',
    marginBottom: '3px',
    letterSpacing: '1px',
  };

  const priceStyle = (isDiscounted) => ({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: isDiscounted ? '#2e7d32' : '#2e7d32',
    margin: '0 0 3px 0',
    letterSpacing: '0.5px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  });

  const originalPriceStyle = {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '1rem',
    marginRight: '8px',
    fontWeight: 500,
  };

  const discountPercentageStyle = {
    background: 'linear-gradient(90deg,#2e7d32 60%,#81c784 100%)',
    color: '#fff',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginLeft: '6px',
    letterSpacing: '0.5px',
    boxShadow: '0 1px 4px rgba(46,125,50,0.08)',
  };

  const priceNoteStyle = {
    fontSize: '0.8rem',
    color: '#888',
    marginTop: '2px',
    marginBottom: '2px',
  };

  const cheapestTagStyle = {
    background: 'linear-gradient(90deg, #c8e6c9 60%, #a5d6a7 100%)',
    color: '#1b5e20',
    padding: '4px 10px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    display: 'inline-block',
    marginBottom: '5px',
    border: '1px solid #81c784',
    letterSpacing: '0.5px',
    boxShadow: '0 1px 4px rgba(129,199,132,0.08)',
    maxWidth: '90%',
    whiteSpace: 'nowrap',
  };

  const bookingActionsStyle = {
    textAlign: 'center',
    paddingTop: '8px',
  };

  const bookNowButtonStyle = (isExceeded) => ({
    background: isExceeded
      ? 'linear-gradient(90deg,#bdbdbd 60%,#e0e0e0 100%)'
      : 'linear-gradient(90deg,#43a047 60%,#66bb6a 100%)',
    color: '#fff',
    padding: '12px 0',
    border: 'none',
    borderRadius: '7px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: isExceeded ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    marginBottom: '6px',
    transition: 'background 0.2s, transform 0.2s',
    boxShadow: isExceeded
      ? '0 2px 8px rgba(189,189,189,0.10)'
      : '0 2px 12px rgba(46,125,50,0.10)',
    letterSpacing: '0.5px',
  });

  const availabilityNoteStyle = {
    fontSize: '0.9rem',
    color: '#c9302c',
    fontWeight: 'bold',
    marginTop: '5px',
    letterSpacing: '0.5px',
  };

  const capacityExceededStyle = {
    color: '#dc3545',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    marginTop: '5px',
    textAlign: 'center',
    letterSpacing: '0.5px',
  };

  const quantitySelectorStyle = {
    border: '1.5px solid #81c784',
    padding: '6px 10px',
    fontSize: '1rem',
    textAlign: 'center',
    borderRadius: '6px',
    width: '50px',
    margin: '0 auto 8px auto',
    display: 'block',
    background: '#f8fafc',
    fontWeight: 'bold',
    color: '#2e7d32',
    letterSpacing: '0.5px',
  };

  const footerNoteStyle = {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '0.95rem',
    color: '#444',
    background: 'rgba(255,255,255,0.85)',
    borderRadius: '12px',
    padding: '15px 10px',
    boxShadow: '0 2px 12px rgba(46,125,50,0.07)',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid rgba(129,199,132,0.2)',
  };

  const bookingOptions = [
    {
      id: 1,
      title: "Glamping Dome - Prime View",
      image: "/images/gallery-sunrise-view.webp",
      headerTag: "Lowest price available!",
      features: [
        { text: "Breakfast included", hasInfo: false },
        { text: "Cancellation policy", hasInfo: true },
        { text: "Pay at the hotel", hasInfo: false },
        { text: "Book without credit card", hasInfo: false },
        { text: "Parking", hasInfo: false },
        { text: "Free WiFi", hasInfo: false },
      ],
      capacity: 2,
      isCheapest: true,
      price: "₹2,600",
      priceNote: "Per night before taxes and fees",
      availability: "Our last 4 rooms!",
      isExceeded: false,
    },
    {
      id: 2,
      title: "Deluxe Family Tent",
      image: "/images/gallery-sunrise-view.webp",
      headerTag: null,
      features: [
        { text: "Breakfast included", hasInfo: false },
        { text: "Cancellation policy", hasInfo: true },
        { text: "Pay at the hotel", hasInfo: false },
        { text: "Book without credit card", hasInfo: false },
        { text: "Parking", hasInfo: false },
        { text: "Free WiFi", hasInfo: false },
      ],
      capacity: 3,
      price: "₹3,900",
      priceNote: "Per night before taxes and fees",
      availability: "Our last 4 rooms!",
      isExceeded: false,
    },
    {
      id: 3,
      title: "Standard Glamping Dome",
      image: "/images/gallery-sunrise-view.webp",
      headerTag: "Special Deal!",
      features: [
        { text: "Breakfast included", hasInfo: false },
        { text: "Cancellation policy", hasInfo: true },
        { text: "Pay at the hotel", hasInfo: false },
        { text: "Book without credit card", hasInfo: false },
        { text: "Parking", hasInfo: false },
        { text: "Free WiFi", hasInfo: false },
      ],
      capacity: 1,
      originalPrice: "₹2,430",
      discountedPrice: "₹1,300",
      discountPercentage: "-47%",
      priceNote: "Per night before taxes and fees",
      availability: "Our last 2 rooms!",
      isExceeded: false,
    },
  ];

  const renderCapacityIcons = (count) => {
    let icons = '';
    for (let i = 0; i < count; i++) icons += '👤';
    return <div style={capacityIconStyle}>{icons}</div>;
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Book Your Glamping Adventure</h1>
      <div style={cardsContainerStyle}>
        {bookingOptions.map((option) => (
          <div
            key={option.id}
            style={cardStyle(option.isExceeded)}
            onMouseEnter={e => !option.isExceeded && (e.currentTarget.style.boxShadow = '0 16px 40px rgba(46, 125, 50, 0.16)')}
            onMouseLeave={e => !option.isExceeded && (e.currentTarget.style.boxShadow = '0 8px 32px rgba(46, 125, 50, 0.12), 0 1.5px 8px rgba(46, 125, 50, 0.08)')}
          >
            {option.headerTag && <div style={cardHeaderStyle}>{option.headerTag}</div>}
            {option.image && <img src={option.image} alt={option.title} style={cardImageStyle} />}
            <h2 style={cardTitleStyle}>{option.title}</h2>
            <div style={cardContentStyle}>
              <div style={featuresSectionStyle}>
                <ul style={featuresListStyle}>
                  {option.features.map((feature, index) => (
                    <li key={index} style={featureItemStyle}>
                      <span style={checkIconStyle}>✓</span>
                      {feature.text}
                      {feature.hasInfo && <span style={infoIconStyle}>ⓘ</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{flexGrow: 1}}></div>
              <div>
                <div style={pricingAndCapacitySectionStyle}>
                  {renderCapacityIcons(option.capacity)}
                  {option.isCheapest && <div style={cheapestTagStyle}>🔥 CHEAPEST PRICE YOU'VE SEEN!</div>}
                  {option.discountedPrice ? (
                    <div>
                      <span style={originalPriceStyle}>{option.originalPrice}</span>
                      <span style={priceStyle(true)}>{option.discountedPrice}</span>
                      {option.discountPercentage && <span style={discountPercentageStyle}>{option.discountPercentage}</span>}
                    </div>
                  ) : (
                    <div style={priceStyle(false)}>{option.price}</div>
                  )}
                  <div style={priceNoteStyle}>{option.priceNote}</div>
                  {option.isExceeded && option.exceededMessage && <div style={capacityExceededStyle}>{option.exceededMessage}</div>}
                </div>
                <div style={bookingActionsStyle}>
                  <div style={quantitySelectorStyle}>1</div>
                  {option.isExceeded && option.guestsExceeded && (
                    <div style={{...capacityExceededStyle, fontSize: '0.8rem', marginBottom: '5px'}}>
                      {option.guestsExceeded} ⓘ
                    </div>
                  )}
                  
                  <a
                    href={option.isExceeded ? undefined : agodaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={bookNowButtonStyle(option.isExceeded)}
                    onClick={(e) => option.isExceeded && e.preventDefault()}
                    onMouseEnter={e => !option.isExceeded && (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => !option.isExceeded && (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    Book now
                  </a>
                  <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '5px' }}>It only takes 2 minutes</div>
                  {option.availability && !option.isExceeded && (
                    <div style={availabilityNoteStyle}>{option.availability}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={footerNoteStyle}>
        <p style={{marginBottom: '8px', fontSize: '0.9rem'}}>All bookings are processed securely through our partner Agoda. Prices and availability may vary.</p>
        <p style={{fontSize: '0.9rem', margin: 0}}>For group bookings or special requests, please <a href="/contact" style={{ color: '#2e7d32', fontWeight: 'bold', textDecoration: 'underline' }}>contact us</a> directly.</p>
      </div>
    </div>
  );
};

export default BookPage;
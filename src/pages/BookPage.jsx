import React from 'react';

const BookPage = () => {
  const agodaLink = "https://www.agoda.com/en-in/jackuline-school-of-thought/hotel/all/kolvan-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-05-23&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false¤cyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=39022fe9-84b4-4566-b485-97765c4da483&ds=fTsa6qaO%2F4TpstZO";

  const pageStyle = {
    padding: '100px 20px 40px 20px',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(120deg, #e8f5e9 0%, #f1f8e9 100%)',
  };

  const headingStyle = {
    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '48px',
    fontWeight: '900',
    letterSpacing: '2px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    textShadow: '0 2px 12px #fff, 0 2px 12px #e0f7fa',
  };

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '38px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = (isExceeded) => ({
    background: 'rgba(255,255,255,0.97)',
    borderRadius: '18px',
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
  });

  const cardHeaderStyle = {
    background: 'linear-gradient(90deg, #81c784 60%, #c8e6c9 100%)',
    color: '#1b5e20',
    padding: '12px 18px',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    letterSpacing: '1px',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    boxShadow: '0 2px 8px rgba(129,199,132,0.09)',
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    boxShadow: '0 2px 12px rgba(46,125,50,0.07)',
  };

  const cardTitleStyle = {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#2e7d32',
    padding: '18px 12px 10px 12px',
    textAlign: 'center',
    borderBottom: '1px solid #e8f5e9',
    margin: 0,
    letterSpacing: '1px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  };

  const cardContentStyle = {
    padding: '18px 18px 0 18px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const featuresSectionStyle = {
    marginBottom: '18px',
  };

  const featuresListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px 18px',
  };

  const featureItemStyle = {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    letterSpacing: '0.01em',
  };

  const checkIconStyle = {
    color: '#2e7d32',
    marginRight: '8px',
    fontSize: '1.1em',
    fontWeight: 'bold',
  };

  const infoIconStyle = {
    color: '#7cb342',
    marginLeft: '5px',
    fontSize: '0.9em',
    cursor: 'pointer',
    opacity: 0.7,
  };

  const pricingAndCapacitySectionStyle = {
    textAlign: 'center',
    padding: '18px 0 12px 0',
    borderTop: '1px solid #e8f5e9',
    borderBottom: '1px solid #e8f5e9',
    marginBottom: '15px',
    background: 'rgba(232,245,233,0.13)',
    borderRadius: '8px',
  };

  const capacityIconStyle = {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '5px',
    letterSpacing: '2px',
  };

  const priceStyle = (isDiscounted) => ({
    fontSize: '2.1rem',
    fontWeight: 'bold',
    color: isDiscounted ? '#2e7d32' : '#2e7d32',
    margin: '0 0 5px 0',
    letterSpacing: '1px',
    fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
  });

  const originalPriceStyle = {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '1.1rem',
    marginRight: '10px',
    fontWeight: 500,
  };

  const discountPercentageStyle = {
    background: 'linear-gradient(90deg,#2e7d32 60%,#81c784 100%)',
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginLeft: '8px',
    letterSpacing: '1px',
    boxShadow: '0 1px 4px rgba(46,125,50,0.08)',
  };

  const priceNoteStyle = {
    fontSize: '0.9rem',
    color: '#888',
    marginTop: '2px',
    marginBottom: '2px',
  };

  const cheapestTagStyle = {
    background: 'linear-gradient(90deg, #c8e6c9 60%, #a5d6a7 100%)',
    color: '#1b5e20',
    padding: '4px 12px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    display: 'inline-block',
    marginBottom: '7px',
    border: '1px solid #81c784',
    letterSpacing: '1px',
    boxShadow: '0 1px 4px rgba(129,199,132,0.08)',
  };

  const bookingActionsStyle = {
    textAlign: 'center',
    paddingTop: '10px',
  };

  const bookNowButtonStyle = (isExceeded) => ({
    background: isExceeded
      ? 'linear-gradient(90deg,#bdbdbd 60%,#e0e0e0 100%)'
      : 'linear-gradient(90deg,#43a047 60%,#66bb6a 100%)',
    color: '#fff',
    padding: '14px 0',
    border: 'none',
    borderRadius: '7px',
    fontSize: '1.08rem',
    fontWeight: 'bold',
    cursor: isExceeded ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    marginBottom: '8px',
    transition: 'background 0.2s, transform 0.2s',
    boxShadow: isExceeded
      ? '0 2px 8px rgba(189,189,189,0.10)'
      : '0 2px 12px rgba(46,125,50,0.10)',
    letterSpacing: '1px',
  });

  const availabilityNoteStyle = {
    fontSize: '0.95rem',
    color: '#c9302c',
    fontWeight: 'bold',
    marginTop: '7px',
    letterSpacing: '1px',
  };

  const capacityExceededStyle = {
    color: '#dc3545',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '7px',
    textAlign: 'center',
    letterSpacing: '1px',
  };

  const quantitySelectorStyle = {
    border: '1.5px solid #81c784',
    padding: '8px 12px',
    fontSize: '1.08rem',
    textAlign: 'center',
    borderRadius: '6px',
    width: '60px',
    margin: '0 auto 10px auto',
    display: 'block',
    background: '#f8fafc',
    fontWeight: 'bold',
    color: '#2e7d32',
    letterSpacing: '1px',
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
      isExceeded: false, // Changed from true to false to enable this option
      // Removed exceededMessage and guestsExceeded since it's now enabled
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
                    <div style={{...capacityExceededStyle, fontSize: '0.9rem', marginBottom: '5px'}}>
                      {option.guestsExceeded} ⓘ
                    </div>
                  )}
                  <a
                    href={option.isExceeded ? undefined : agodaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={bookNowButtonStyle(option.isExceeded)}
                    onClick={(e) => option.isExceeded && e.preventDefault()}
                    onMouseEnter={e => !option.isExceeded && (e.currentTarget.style.transform = 'scale(1.04)')}
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
      <div style={{
        textAlign: 'center',
        marginTop: '48px',
        fontSize: '1.05rem',
        color: '#444',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '12px',
        padding: '18px 12px',
        boxShadow: '0 2px 12px rgba(46,125,50,0.07)',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid rgba(129,199,132,0.2)',
      }}>
        <p style={{marginBottom: '8px'}}>All bookings are processed securely through our partner Agoda. Prices and availability may vary.</p>
        <p>For group bookings or special requests, please <a href="/contact" style={{ color: '#2e7d32', fontWeight: 'bold', textDecoration: 'underline' }}>contact us</a> directly.</p>
      </div>
    </div>
  );
};

export default BookPage;
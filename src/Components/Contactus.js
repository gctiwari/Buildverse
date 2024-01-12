
import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

const ContactUs = ({id}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '50px',
    backgroundColor: 'white',
    gap: '20px', 
  };

  const infoColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
  };

  const infoStyle = {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center', 
    gap: '10px',
    fontSize: '1rem',
    color: '#333',
  };

  const headerStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const mapStyle = {
    border: '0',
    width: '100%', 
    height: '450px',
    marginBottom: '2rem',
  };

  
  const socialMediaStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px', 
    marginTop: '20px', 
  };

  const iconStyle = {
    fontSize: '2rem', 
    color: '#333',
    textDecoration: 'none', 
  };
  const followTextStyle = {
    marginRight: '10px', 
    fontSize: '2rem', 
    display: 'flex',
    alignItems: 'center', 
    color: '#333',
    fontWeight: 'bold',

  };
  const headingStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // This is a common professional font stack
    fontSize: '1.6rem', // Sets the size of the font
    fontWeight: '600', // Medium weight for the heading font
    textAlign: 'center', // Centers the heading text
    marginBottom: '1rem', // Adds space below the heading
    textDecoration: 'underline', // Underlines the text
    textDecorationColor: '#FFD700', // Gold underline color, you can choose another color
    textDecorationThickness: '2px', // Thickness of the underline
    textUnderlineOffset: '0.5rem', // Distance of the underline from the text
    color: '#333', // Dark color for the text
    padding: '0.5rem 0', // Padding above and below the text
  };
  


  return (<section id={id}>
    <div style={containerStyle}>
      <div style={infoColumnStyle}>
        <h2 style={headingStyle}>Book a free consultation now</h2>
        <h2 style={headerStyle}>Contact Info</h2>
        <p style={infoStyle}>
          <FiPhone style={iconStyle} />
          <span>9849057427, 9393000098</span>
        </p>
        <p style={infoStyle}>
          <FiMail style={iconStyle} />
          <span>Buildverse.co@gmail.com</span>
        </p>
        <p style={infoStyle}>
          <FiMapPin style={iconStyle} />
          <span>11-3-50/A, Seetaphalmandi, Secunderabad, Hyderabad-500061</span>
        </p>
        <div style={socialMediaStyle}>
        <span style={followTextStyle}>Follow us on:</span>
        <a href="https://www.instagram.com/buildverseco?igshid=MTNiYzNiMzkwZA==" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaInstagram aria-label="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/buildverse" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaLinkedinIn aria-label="LinkedIn" />
        </a>
      </div>
      </div>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7961900826267!2d78.5145205!3d17.421565900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99847a76b701%3A0x95ddb19ec6d489c8!2s11-3-50%2FA%2C%20Baban%20Basthi%2C%20Padmarao%20Nagar%2C%20Secunderabad%2C%20Telangana%20500061!5e0!3m2!1sen!2sin!4v1703695572215!5m2!1sen!2sin"        style={mapStyle}
        title="Google Map of Our Location"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
    </div>
    </section>
  );
};

export default ContactUs;


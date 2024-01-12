import React from 'react';
import { FaRegThumbsUp, FaRegEye, FaLeaf, FaRegMoneyBillAlt } from 'react-icons/fa';
import backgroundImage from './mission.png'


const CombinedSection = ({id}) => {
  // Styles
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ensure the image covers the full section
    backgroundRepeat: 'no-repeat', // The image will not repeat
    backgroundPosition: 'center', // Centers the image
    color: '#fff', // White text color
    padding: '50px 0',
    paddingTop: '12vh', // Adjusts for the navbar height
    height: '88vh', // Sets the height to full window height minus navbar height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Distributes space between the content
    textAlign: 'center',
};

  const headerStyle = {
    marginBottom: '30px',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px', // Space between cards and testimonials
  };

  const cardStyle = {
    width: '20%',
    padding: '20px',
    background: 'rgba(51, 51, 51, 0.4)', // Increased opacity to 90%
    borderRadius: '5px',
  };

  const iconStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#FFD700', // Gold color for icons
  };

  const testimonialsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap as needed
    gap: '20px',
     // Space between items
    // Add padding, margins, etc., as needed
  };
  
  const testimonialStyle = {
    backgroundColor: 'rgba(51, 51, 51, 0.5)', // Dark background for the testimonial card
    color: '#fff', // White text color
    padding: '20px',
    margin: '10px 0', // Vertical margins for spacing
    borderRadius: '4px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    flex: '0 1 calc(50% - 20px)', // Sets the basis for each item to be half of the container width minus the gap
    maxWidth: 'calc(50% - 20px)', // Ensures the item does not exceed half the container width
    boxSizing: 'border-box', // Ensures padding is included in width calculation
    textAlign: 'center', // Center text alignment
  };
  
  // Then in your component's return statement, apply these styles:
  
 

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Reduced transparency with 90% opacity
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '10px',
    color: 'black',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '0 auto',
    maxWidth: '80%',
    // ... any other styles
  };
 

  return (<section id={id}>
    <div style={sectionStyle}>
       

       <div style={{ ...headerStyle, ...overlayStyle }}><h2 style={{color:'black',margin:'2px'}}>Why Choose Us</h2></div>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <FaRegThumbsUp style={iconStyle} />
          <h3>Reliability</h3>
          <p>Count on us for dependable and lasting solutions.</p>
        </div>
        <div style={cardStyle}>
          <FaRegEye style={iconStyle} />
          <h3>Transparency</h3>
          <p>Clear communication and openness at every project stage.</p>
        </div>
        <div style={cardStyle}>
          <FaLeaf style={iconStyle} />
          <h3>Sustainability</h3>
          <p>Incorporate eco-friendly practices into your designs.</p>
        </div>
        <div style={cardStyle}>
          <FaRegMoneyBillAlt style={iconStyle} />
          <h3>Cost-Effectiveness</h3>
          <p> Craft your vision within budgetary constraints.</p>
        </div>
      </div>

      
      <div style={{ ...headerStyle, ...overlayStyle }}><h2>What Clients Say</h2></div>
      <div style={testimonialsContainerStyle}>
    <div style={testimonialStyle}>
    
    <p>“Buildverse exceeded our expectations with their cost-effective solutions. The support system was exceptional, ensuring a seamless journey from design to completion. Their commitment to customer satisfaction is unmatched." </p>
<footer>- Bhavani Ryala </footer> 
  
</div>
<div style={testimonialStyle}>

    <p>"Reliable, precise, and collaborative – Buildverse transformed our vision into reality. Their commitment to quality and transparency made the entire experience smooth and enjoyable. We highly recommend their services."  </p>
        <footer>- Koushik Bhumarapu</footer>
  </div>
 </div>
</div>
</section>
  );
};



export default CombinedSection;

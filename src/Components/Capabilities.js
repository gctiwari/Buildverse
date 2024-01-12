import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideImage1 from './svf1.png';
import slideImage2 from './svf2.png';
import slideImage3 from './svf3.png';
import slideImage4 from './svf4.png';

import CivilEngineeringImage from './Civil.jpg';
import ConstructionWorkImage from './Architect.png';
import BridgeImage from './Interiors.png';

const Capabilities = ({ id }) => {
  const slideImages = [slideImage1, slideImage2, slideImage3, slideImage4];

  const properties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    autoplay: true,
  };

  // Card content with images
  const cards = [
    {
      img: CivilEngineeringImage,
      title: "Civil Engineering",
      details: ["Steel Structures", "Foundations", "Warehouses", "Terminals", "Buildings", "Retro Fitting", "Water Proofing"],
    },
    {
      img: ConstructionWorkImage,
      title: "Architectural",
      details: ["Site Layouts", "Building Layouts", "Space Planning", "Floor Plans", "Elevations", "Aesthetic Exteriors", "Concept Houses", "Cafes", "Farmhouses", "Guest Houses", "Vintage Houses & Commercial Spaces"],
    },
    {
      img: BridgeImage,
      title: "Interiors",
      details: ["3D Render Designs", "False Ceiling", "Custom Design Furniture", "Lighting", "Flooring"],
    },
  ];


  const cardContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    gap: '30px'
  };
  const cardStyle = {
    width: '70%', // Control the card width
    margin: '0 10px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    position: 'relative', // To position the image absolutely within the card
    overflow: 'hidden', // Ensure the image doesn't exceed the card's boundaries
  };
  const headingStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // This is a common professional font stack
    fontSize: '2rem', // Sets the size of the font
    fontWeight: '600', // Medium weight for the heading font
    textAlign: 'center', // Centers the heading text
    marginBottom: '1rem', // Adds space below the heading
    textDecoration: 'underline', // Underlines the text
    textDecorationColor: '#FFD700', // Gold underline color, you can choose another color
    textDecorationThickness: '2px', // Thickness of the underline
    textUnderlineOffset: '0.5rem', // Distance of the underline from the text
    color: '#333', // Dark color for the text
    //padding: '0.5rem 0', // Padding above and below the text
    paddingTop: '12vh',
  };


  // Text content style, to push it below the image
  const contentStyle = {
    marginTop: '0', // Push the text content below the image
    textAlign: 'center',
  };
  const listStyle = {
    listStyleType: 'none', // Removes the default list item bullet
    marginLeft: '0', // Aligns content with the left edge of the card
    paddingLeft: '1em', // Adds some space before the text starts
    textAlign: 'left', // Align text to the left
    lineHeight: '1.5', // Adds space between lines for better readability
  };
  
  // Define the listItemStyle object for individual list items
  const listItemStyle = {
    marginBottom: '0.5em', // Adds space after each list item
    display: 'flex', // Enables flexbox layout
    alignItems: 'center', // Vertically centers the content of the list item
  };
  
  // Define a pseudo-element style for custom bullets
  const pseudoElementStyle = {
    content: `"•"`, // Unicode character for bullet
    color: '#FFD700', // Gold color for the bullet
    fontWeight: 'bold', // Make the bullet bold
    marginRight: '0.5em', // Adds space between the bullet and the text
  };
  

  return (
    <section id={id} style={{ position: 'relative', overflow: 'hidden' }}>
      <h2 style={headingStyle}>Services We Offer</h2>
      <Slide {...properties}>
        {slideImages.map((each, index) => (
          <div key={index} className="each-slide">
            <div style={{ backgroundImage: `url(${each})`, height: '90vh', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        ))}
      </Slide>
     
      <div style={{ ...cardContainerStyle, zIndex: 2 }}>
      {cards.map((card, index) => (
        <div key={index} style={cardStyle}>
          {/* ... */}
          <div style={contentStyle}>
          <h3>{card.title}</h3>
          <ul style={listStyle}>
            {card.details.map((detail, idx) => (
              <li key={idx} style={listItemStyle}>
                <span style={pseudoElementStyle}></span> {/* This span will act as the custom bullet */}
                {detail}
              </li>
            ))}
          </ul>
        </div>
        </div>
      ))}
    </div>
   
  </section>
          
              
  );
   
};

export default Capabilities;

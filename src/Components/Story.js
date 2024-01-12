import React from 'react';
import storyBackgroundImage from './Building.png';

const Story = () => {
  const storySectionStyle = {
    position: 'relative',
    textAlign: 'center',
    color: '#ffd700',
    paddingTop: '50px', 
    paddingBottom: '50px', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 'calc(100vh - 50px)' 
  };

  const storyBackgroundStyle = {
    backgroundImage: `url(${storyBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, 
  };
  const paragraphStyle = {
    color: '#FFFFFF', // White color for better visibility
    fontSize: '2rem', // Slightly larger font size for the paragraph
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: '800px',
    marginBottom: '1rem', // Max width to control the line length
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
  };

  
  const storyOverlayStyle = {
    position: 'absolute',
    top: 200,
    left: 420,
    right: 200,
    bottom:200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    color: '#fff', // White text color for contrast
    borderRadius: '15px', // Rounded corners
    padding: '2rem',
    maxWidth: '800px',
    textAlign: 'center',
    zIndex: '2',
  };
 /*const titleStyle = {
    color: '#FFFFFF', // White color for the title for better visibility
    fontSize: '2.5rem', // Larger font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    textAlign: 'center',
    marginBottom: '1rem', // Space between the title and the paragraph
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
  };*/

  return (
    <section id="story" style={storySectionStyle}>
      <div style={storyBackgroundStyle}></div>
      <div style={storyOverlayStyle}>
      <h1 style={paragraphStyle}> We paint the story where function meets form and aesthetics whisper your narrative.</h1>
              
        <p>
          Modern or rustic, minimalist or maximalist – we weave your vision into the very fabric of the building,
          designing concept houses, cafes that exude warmth, farmhouses nestled in nature, and commercial
          spaces that captivate every customer.
        </p>
        <a href="#about-us" style={{ color: '#fff', textDecoration: 'underline' }}>Know more</a>
      </div>
    </section>
  );
};

export default Story;

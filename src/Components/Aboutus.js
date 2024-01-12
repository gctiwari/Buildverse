import React from 'react';
import engineeringBackground from './image14.png'; // Replace with your image path
import layoutBackground from './image3.png';
import interiorbg from './image2.png'; // Replace with your image path
import vintagebg from './image11.png';
import backgroundImage from './arrow.jpg';

const AboutUs = ({id}) => {
  // Styles for the container of the About Us section
  const aboutUsContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack the items vertically
    alignItems: 'center', // Center-align the items horizontally
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '5vh', // Add padding-top equivalent to the navbar's height
    marginTop: '-5vh'

  };

  // Styles for each row of content
  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Creates space between the image and text
    alignItems: 'center',
    width: '100%', 
    margin: '0 auto'// Full width to utilize the space
    //marginBottom: '1px', // Reduces the gap between rows
  };

  // Styles for the images
  const imageStyle = {
    width: '35%',
    // Set a fixed height or remove this line if the height is causing extra space
    // height: 'fixedHeight', // Replace fixedHeight with an actual value
    objectFit: 'cover', // This will ensure the aspect ratio is maintained
    margin: '0', // Reset default margin
    padding: '0', // Reset default padding
  };

  // Styles for the text content
  const contentStyle = {
    width: '55%',
    paddingLeft: '20px',
    margin: '0', // Reset default margin
    padding: '0', // Reset default padding
  };
  // Styles for the section heading
  const headingStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // This is a common professional font stack
    fontSize: '2.5rem', // Sets the size of the font
    fontWeight: 'bold', // Medium weight for the heading font
    textAlign: 'center', // Centers the heading text
    marginBottom: '0', // Adds space below the heading
    textDecoration: 'underline', // Underlines the text
    textDecorationColor: '#FFD700', // Gold underline color, you can choose another color
    textDecorationThickness: '2px', // Thickness of the underline
    textUnderlineOffset: '0.5rem', // Distance of the underline from the text
    color: '#333', // Dark color for the text
    //padding: '0.5rem 0', 
    paddingTop: '12vh',// Padding above and below the text
  };
  
  // Function to create a row with image and text
  const createRow = (image, text, isImageFirst) => {
    return (
      <div style={rowStyle}>
        {isImageFirst && <img src={image} alt="Background" style={imageStyle} />}
        <div style={contentStyle}>{text}</div>
        {!isImageFirst && <img src={image} alt="Background" style={imageStyle} />}
        
      </div>
    );
  };
  const containerStyle = {
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-around', // Space out the children evenly
    alignItems: 'center', // Vertically align items in the middle
    padding: '2rem', // Give some padding around the container
    maxWidth: '1500px', // Maximum width of the container
    margin: '0 auto', // Center the container
  };

  const textStyle = {
    width: '75%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Give text blocks a width of 25%
    margin: '0 2rem', // Add some margin on the sides
    textAlign: 'center', // Center the text
  };

  const imagesStyle = {
    width: '20%', // Width of the image
    alignSelf: 'center', 
    // Align image in the center of the flex item
  };

  // Content for the About Us section
  const sculptingContent = (<p>  <span style={{ fontWeight: 'bold',fontSize: '1.2em', color: '#FFD700', padding: '2px 5px', borderRadius: '2px' }}><i>
  We sculpt the canvas.</i>
</span>  Our civil engineering prowess sets the unshakeable stage for every project, from towering steel structures to sturdy foundations that anchor your ambitions. Warehouses that hum with efficiency, terminals that connect you to the world, and buildings that stand as testaments to progress – we build the infrastructure that fuels your aspirations.
  Foundations laid with precision, meticulous waterproofing that defies the elements, and retrofitting that breathes new life into tired structures – we ensure durability and sustainability in every step.
  </p>);
  const paintingContent = (<p><span style={{ fontWeight: 'bold',fontSize: '1.2em', color: '#FFD700',  padding: '2px 5px', borderRadius: '2px' }}><i>
  We paint the story.</i>
</span> where function meets form and aesthetics whisper your narrative.
  Site layouts that embrace the landscape, building layouts that flow with your life, and space planning that maximizes potential – we craft the framework for your perfect world.
  </p>);
const interior =`Modern or rustic, minimalist or maximalist – we weave your vision into the very fabric of the building, designing concept houses, cafes that exude warmth, farmhouses nestled in nature, and commercial spaces that captivate every customer.`;
const vintage=`Vintage houses reimagined with contemporary flair, heritage buildings reborn as vibrant hubs – we embrace the past, infusing it with modern touches to create timeless spaces.
Experience your vision before it comes to life with photorealistic 3D renderings, letting you explore every corner and refine your concept to perfection.
From custom-designed furniture that reflects your personality to lighting that dances on the walls and flooring that feels like a warm embrace – we transform the ordinary into the extraordinary. At Buildverse, we don't just build structures, we build your dreams. Explore our portfolio to see how we've brought countless visions to life, and let us turn yours into reality.`;

  return (<section id={id} style={{ width: '100%' }}>
  <h2 style={headingStyle}>ABOUT US</h2>
  <div style={aboutUsContainerStyle}>
  <div style={containerStyle}>
        <div style={textStyle}>
          <h3 style={headingStyle}>MISSION</h3>
          <p>Our mission is to provide creative solutions and innovative designs
            that exceed our client’s expectations and industry standards. We
            make it our vocation to design and build Infrastructure facilities
            that help improve daily life. We strive to deliver superior quality
            projects to our clients while meeting budget and schedule goals.</p>
        </div>
        <img
          src={backgroundImage} // Replace with the path to your image
          alt="Target"
          style={imagesStyle}
        />
        <div style={textStyle}>
          <h3 style={headingStyle}>VISION</h3>
          <p> We envision a world where buildings dance with light and warmth,
            sanctuaries of comfort and creativity, whispering stories within
            every brick and beam. A world where sustainability echoes in every
            blueprint, where respect for the planet becomes the foundation for
            every project.</p>
        </div>
      </div>
    
  
      {createRow(engineeringBackground, sculptingContent, true)}
      {createRow(layoutBackground, paintingContent, false)}
      {createRow(interiorbg, interior, true)}
      {createRow(vintagebg, vintage, false)}
      
      {/* Add more rows as needed */}
      </div>
    </section>
  );
};

export default AboutUs;
/*<div style={missionVisionContainerStyle}>
        <div style={missionVisionStyle}>
          <h3>Mission</h3>
          <p>
            Our mission is to provide creative solutions and innovative designs
            that exceed our client’s expectations and industry standards. We
            make it our vocation to design and build Infrastructure facilities
            that help improve daily life. We strive to deliver superior quality
            projects to our clients while meeting budget and schedule goals.
          </p>
          <h3>Vision</h3>
          <p>
            We envision a world where buildings dance with light and warmth,
            sanctuaries of comfort and creativity, whispering stories within
            every brick and beam. A world where sustainability echoes in every
            blueprint, where respect for the planet becomes the foundation for
            every project.
          </p>
        </div>
        <img
          src={mission}
          alt="Mission and Vision"
          style={missionVisionImageStyle}
        />
      </div>*/
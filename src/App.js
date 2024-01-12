import React from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing.mp4';
import AboutUs from './Components/Aboutus';
import Capabilities from './Components/Capabilities';
import Contactus from './Components/Contactus';
import Client from './Components/Client'
import Story from './Components/Story'

function App() {
  const heroStyle = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',marginTop: '7vh'
  };

  const gapStyle = {
    height: '50px', // This is the height of the white gap
    backgroundColor: 'white', // Set the background color to white
  };
  const sectionStyle = {
    paddingTop: '70px', // Adjust this value based on the actual height of your Navbar
    marginTop: '-70px' // Negative margin to offset the padding
  };

  return (
    <div className="App">
      <Navbar />
      <div id="home" style={heroStyle}> {/* Add an id for the home section */}
        <video 
          autoPlay 
          loop 
          muted 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1 
          }}
        >
          <source src={Landing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
     <Story/>
      <div style={gapStyle}></div>
      
      <div style={sectionStyle}>
        <Capabilities id="services" /> 
      </div>
      <div style={sectionStyle}>
        <AboutUs id="about-us" /> 
      </div>
      <div style={sectionStyle}>
        <Client id="Testimonials"/>
      </div>
      <div style={sectionStyle}>
        <Contactus id="contactus"/>
      </div>
    
    </div>
  );
}

export default App;

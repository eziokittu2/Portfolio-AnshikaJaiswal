import React from 'react';
import myImage from '../../assets/MyImages/Anshika.png';

const BackgroundImage = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full bg-no-repeat bg-right bg-contain z-0 bg-black " 
         style={{ backgroundImage: `url(${myImage})`, backgroundPosition: '80% center' }}>
    </div>
  );
};

export default BackgroundImage;
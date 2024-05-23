import React, { useEffect, useRef } from 'react';
import myImage1 from '../../assets/MyImages/Anshika1.png';
import myImage2 from '../../assets/MyImages/Anshika2.png';
import myImage3 from '../../assets/MyImages/Anshika3.png';
import myImage4 from '../../assets/MyImages/Anshika4.png';
import myImage5 from '../../assets/MyImages/Anshika5.png';
import myImage6 from '../../assets/MyImages/Anshika6.png';
import myImage7 from '../../assets/MyImages/Anshika7.png';

const images = [myImage1, myImage2, myImage3, myImage4, myImage5, myImage6, myImage7, myImage1, myImage2, myImage3, myImage4, myImage5, myImage6, myImage7];

const BackgroundImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let isAnimating = false;

    const animate = () => {
      if (isAnimating) return;
      isAnimating = true;

      const firstImage = container.firstChild;
      const firstImageWidth = firstImage.getBoundingClientRect().width;

      container.style.transition = 'transform 4s linear';
      container.style.transform = `translateX(-${firstImageWidth}px)`;

      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)';
        container.appendChild(firstImage);
        isAnimating = false;
      }, 4000); // The duration here should match the transition duration
    };

    const intervalId = setInterval(animate, 400); // Adjust this interval to control the frequency of image shifts

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 bg-black">
      <div className="scrolling-images flex" ref={containerRef}>
        {images.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} key={index} className="w-auto h-full" />
        ))}
      </div>
    </div>
  );
};

export default BackgroundImages;

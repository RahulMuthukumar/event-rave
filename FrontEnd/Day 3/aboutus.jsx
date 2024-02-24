// aboutus.jsx
import React, { useEffect, useState } from 'react';
import '../assets/aboutus.css'; // Make sure to include your styles

const AboutUs = () => {
  const images = [
    'https://img.freepik.com/premium-vector/cute-panda-playing-dj-electronic-music-with-headphone-cartoon-vector-icon-illustration-animal-music_138676-4284.jpg',
    'https://www.shutterstock.com/image-vector/cute-baby-panda-dabbing-cartoon-600nw-2262126667.jpg',
    'https://img.freepik.com/premium-vector/cute-panda-birthday-party-with-balloon-cartoon-vector-icon-illustration-animal-holiday-isolated_138676-7876.jpg'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="about-us-container">
    {/* <h2>Panda Events!We celebrate You!</h2> */}
      <h3>

"Welcome to Panda Events, where we specialize in crafting magical moments for your special day! Panda Events is an exclusive event management service designed with a focus on creating unforgettable birthday celebrations. Our dedicated team is passionate about bringing joy and creativity to every event, ensuring a personalized and enchanting experience. With Panda Events, birthdays become extraordinary milestones, filled with unique touches and cherished memories. Trust us to turn your celebration into a magical extravaganza, as we believe every birthday deserves to be a truly exceptional and joyous occasion."</h3>

      {images.map((image, i) => (
        <img
          key={i}
          className={`mySlides w3-animate-fading ${i === index ? 'display-block' : 'display-none'}`}
          src={image}
          alt={`Slide ${i + 1}`}
        />
      ))}
    </div>
    
  );
};

export default AboutUs;

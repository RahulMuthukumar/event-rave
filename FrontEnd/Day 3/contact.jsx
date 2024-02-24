// contact.jsx

import React, { useState } from 'react';
import '../assets/contact.css';

// Replace these placeholder URLs with your actual image URLs
const addressImage = 'https://t4.ftcdn.net/jpg/02/98/28/57/360_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg';
const phoneImage = 'https://i.pinimg.com/736x/f5/de/4d/f5de4dd481fae5ba014b4a736d5ce0c8.jpg';
const instagramImage = 'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg';
const emailImage = 'https://i0.wp.com/emrecanduran.com/wp-content/uploads/2021/06/unnamed.png?resize=434%2C230&ssl=1';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic here to handle the form submission, e.g., send data to the server.

    // For demonstration purposes, let's log the form data.
    console.log({ name, email, message });

    // You can also reset the form fields if needed.
    setName('');
    setEmail('');
    setMessage('');
  };

  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box',
    backgroundImage: 'url("https://www.desktopbackground.org/p/2010/05/14/17258_1920x1080-light-pastel-purple-solid-color-background-jpg_1920x1080_h.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    width: '1265px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <div className="contact-cards">
        <FlipCard content=" 📍123 Main Street, Cityville, State, Country" image={addressImage} />
        <FlipCard content=" 📞+1 (555) 123-4567" image={phoneImage} />
        <FlipCard content=" 😎@pandaevents" image={instagramImage} />
        <FlipCard content="📧pandaevents.com" image={emailImage} />
      </div>

      <br/>

      <br/>

      <h1>Feed Back!</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const FlipCard = ({ title, content, image }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </div>
        <div className="flip-card-back">
          <h3 style={{ fontSize: '24px' }}>{title}</h3>
          <p style={{ fontSize: '20px' }}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

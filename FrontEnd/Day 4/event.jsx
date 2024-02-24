// event.jsx

import React, { useState } from 'react';
import '../assets/event.css';

export default function Event() {
  // Sample data for the cards
  const initialBirthdayThemes = [
    {
      id: 1,
      imageUrl: 'https://specialyou.in/cdn/shop/files/61mVjFkMBYL._SL1500.jpg?v=1690194689&width=2048',
      description: 'Beautiful Balloons Birthday Theme',
    },
    {
      id: 2,
      imageUrl: 'https://m.media-amazon.com/images/I/913gHQoqv2L._UF1000,1000_QL80_.jpg',
      description: 'Sweet Candyland Birthday Theme',
    },
    {
        id: 4,
        imageUrl: 'https://m.media-amazon.com/images/I/91cQpTX09SL._AC_UF1000,1000_QL80_.jpg',
        description: 'Dinosaur Adventure Birthday Theme',
    },
    {
        id: 5,
        imageUrl: 'https://www.giftlaya.com/admin/api/public/images/1673426250.jpg',
        description: 'Magical Unicorn Birthday Theme',
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/originals/73/e0/64/73e064e1e5c42478da7f9fe64c126b21.png',
      description: 'Sparkling Stars Birthday Theme',
    },
    {
      id: 6,
      imageUrl: 'https://i.pinimg.com/736x/b5/6b/4d/b56b4d638d7308cefb61fde3233f6cfe.jpg',
      description: 'Sports Extravaganza Birthday Theme',
    },
  ];

  const [birthdayThemes, setBirthdayThemes] = useState(initialBirthdayThemes);

  const handleAddToCart = (id) => {
    // Implement your "Add to Cart" logic here
    console.log(`Added theme with id ${id} to cart`);
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8GDvPgZhiLyjte8pSL7jM_qAuBaMfoeQ1wiBNR2fXUjlkpR0p37OiBfLgploeIxTq0w&usqp=CAU")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    
  };

  const headingStyle = {
    color: 'black',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={headingStyle}>Welcome to Panda Events</h1>
      <h2 style={headingStyle}>Choose Your Theme</h2>
      <div className="event-container">
        {birthdayThemes.map((theme, index) => (
          <div key={theme.id} className="cardss">
            <img src={theme.imageUrl} alt={`Theme ${theme.id}`} />
            <p>{theme.description}</p>
            <button onClick={() => handleAddToCart(theme.id)}>Add to My Party</button>
          </div>
        ))}
      </div>
    </div>
  );
}

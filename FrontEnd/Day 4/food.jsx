// food.jsx

import React, { useState } from 'react';
import '../assets/food.css';

export default function Food() {
  // Sample data for the cards
  const initialFoodItems = [
    {
      id: 1,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwevacqVbTBfqGp1dsVSzg3mn3vI4HSNScIg&usqp=CAU',
      description: 'Italian',
    },
    {
      id: 2,
      imageUrl: 'https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/seo/86062a413058c875eca707639116ca4b.jpg/public',
      description: 'Chinese',
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1620075712/Myanmar-Traditional-Dishes-To-Try-Nan-Gyi-Thoke/Myanmar-Traditional-Dishes-To-Try-Nan-Gyi-Thoke-1120x732.jpg',
      description: 'Burmese',
    },
    {
      id: 4,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSpbrvfDc8u2UAen1NyrLcgaxdQnJAMUabQ&usqp=CAU',
      description: 'North Indian',
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/jerrick/image/upload/v1690220807/64beb9069f4137001d730d2c.jpg',
      description: 'South Indian',
    },
    {
      id: 6,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaoapAZLNd4jPLNVTtr0z6mISq9eWEUGwdw&usqp=CAU',
      description: 'Veg',
    },
  ];

  const [foodItems, setFoodItems] = useState(initialFoodItems);

  const handleAddToCart = (id) => {
    // Implement your "Add to Cart" logic here
    console.log(`Added dish with id ${id} to cart`);
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-photo/abstract-wall-pink-background-texture_196038-14496.jpg?w=900")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // color: '#fff',
    // minHeight: '100vh', // Ensure the background covers the entire screen height
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
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',

  };

  return (
    <div style={backgroundStyle}>
      <h1 style={headingStyle}>Check out Panda's diet</h1>
      <h2 style={headingStyle}>Choose Your Dish</h2>
      <div className="food-container">
        {foodItems.map((item, index) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={`Dish ${item.id}`} />
            <p>{item.description}</p>
            <button onClick={() => handleAddToCart(item.id)}>Add to My Party</button>
          </div>
        ))}
      </div>
    </div>
  );
}

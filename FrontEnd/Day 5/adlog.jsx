// adlog.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Adlog() {
  const containerStyle = {
    maxWidth: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const adbackStyle = {
    margin: '0',
    padding: '0',
    backgroundImage: 'url("https://img.freepik.com/premium-photo/birthday-background-with-cake-illustration-ai-generativexa_118124-18929.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw', // Use viewport width for full width
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const handleLogin = () => {
    // Perform login logic, and if successful, redirect to adtable
    // For now, let's simulate a successful login with a timeout
    setTimeout(() => {
      // Redirect to '/adtable'
      window.location.href = '/adtable';
    }, 1000);
  };

  return (
    <div style={adbackStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username" style={{ marginBottom: '8px' }}>Username:</label>
          <input type="text" id="username" name="username" style={{ padding: '8px', marginBottom: '16px' }} />

          <label htmlFor="password" style={{ marginBottom: '8px' }}>Password:</label>
          <input type="password" id="password" name="password" style={{ padding: '8px', marginBottom: '16px' }} />

          {/* Use the onClick event to handle login and redirection */}
          <button type="button" style={buttonStyle} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

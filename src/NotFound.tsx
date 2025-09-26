import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#343a40'
    }}>
      <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem' }}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
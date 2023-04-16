import React from 'react';
import {Link} from 'react-router-dom'

function Button() {
  return (
    <Link to="/main" style={{ textDecoration: 'none' }}>
    <button style={{ 
      padding: '10px 20px', 
      fontSize: '1rem', 
      backgroundColor: '#4CAF50', 
      color: 'white',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      margin: '0 auto',
      display: 'block',
      maxWidth: '100%',
      width: '200px',
      marginBottom: '20px',
      outline: 'none'
    }}>Create Resume</button>
     </Link>
  );
}

export default Button;

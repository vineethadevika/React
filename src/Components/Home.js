import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="nav-link">Resume</Link>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/signIn" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Home;

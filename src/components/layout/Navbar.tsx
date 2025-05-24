import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
        <h5 className="fw-bold text-gold">Modern Walk</h5>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mens-clothing" className="nav-link">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/womens-clothing" className="nav-link">
                Women
              </NavLink>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
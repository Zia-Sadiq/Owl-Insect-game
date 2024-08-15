import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-light bg-light custom-navbar">
    <span className="navbar-brand mb-0 h1">LOGO</span>
    <div>
      <button className="btn btn-outline-secondary">Library</button>
      <button className="btn btn-outline-secondary">Previous</button>
      <button className="btn btn-outline-secondary">Next</button>
      <button className="btn btn-outline-secondary">Logout</button>
    </div>
  </nav>
);

export default Navbar;

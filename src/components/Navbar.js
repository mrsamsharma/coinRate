import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();

  const handleBack = () => {
    history(-1);
  };

  return (
    <nav className="navbar">
      <i className="go-back" onClick={handleBack} onKeyDown={handleBack} role="presentation" />
      <span className="logo">coinRate</span>
      <div className="mic-gear">
        <i className="nav-mic" />
        <i className="nav-gear" />
      </div>
    </nav>
  );
};

export default Navbar;

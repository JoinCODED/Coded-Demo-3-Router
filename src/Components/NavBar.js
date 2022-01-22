import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/features">Features</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

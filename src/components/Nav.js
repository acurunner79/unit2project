import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/hero-search">
        <div>Hero Search</div>
      </Link>
        <Link to="about">
            <div>About</div>
        </Link>
    </div>
  );
};

export default Nav;
import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/hero-search">
        <div>Hero Search</div>
      </Link>
        <Link to="about">
            <div>About Heroes</div>
        </Link>
    </div>
  );
};

export default Nav;
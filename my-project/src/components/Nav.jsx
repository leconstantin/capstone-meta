import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex flex-1 justify-between items-center p-4">
      <ul className="flex gap-14">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button>Book table</button>
    </nav>
  );
};

export default Nav;

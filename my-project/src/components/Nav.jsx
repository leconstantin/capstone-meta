import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-1 justify-between items-center p-4">
      <ul className="flex gap-14">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button>Book table</button>
    </nav>
  );
};

export default Nav;

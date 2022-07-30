import React from "react";
import pepe from "../assets/images/pepe.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={pepe} alt="pepe" />
          <h1>Meme Generator</h1>
        </li>
        <li>
          <h5>React Course - Project 3</h5>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

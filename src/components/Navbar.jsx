import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "dodgerblue",
        color: "white",
        position: "sticky",
        width: "1200px",
        height: "50px",
      }}
    >
      <h2>StackTracker</h2>
      <nav>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

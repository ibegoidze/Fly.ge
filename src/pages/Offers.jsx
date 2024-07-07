import React from "react";
import { Link, Outlet } from "react-router-dom";

function Offers() {
  return (
    <div>
      <h1>OFFERS</h1>
      <nav>
        <ul>
          <li>
            <Link to="list">LIST</Link>
          </li>
          <li>
            <Link to="details">DETAILS</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Offers;

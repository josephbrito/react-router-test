import React from "react";

import { Link } from "react-router-dom";

import Auth from "./authButton";

const Nav = (props) => {
  return (
    <div className="nav">
      <h1>José</h1>
      <ul className="nav-links">
        <Auth />
        <li>
          <a href="/">
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <a href="/aulas">
            <Link to="/aulas">Aulas</Link>
          </a>
        </li>
        <li>
          <a href="/sobre">
            <Link to="sobre">Sobre</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

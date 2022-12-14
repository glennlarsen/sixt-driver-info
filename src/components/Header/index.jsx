import React from "react";
import logo from "images/sixt-logo-black-white.png";

function Header({ title, flex, info }) {
  return (
    <header>
      <div
        style={{ display: "flex", flex: flex, flexDirection: "column" }}
        className="logo"
      >
        <img src={logo} alt="Sixt Logo" />
        <span>{info}</span>
      </div>
      <h1>{title}</h1>
      <div className="emtpy-header"></div>
    </header>
  );
}

export default Header;

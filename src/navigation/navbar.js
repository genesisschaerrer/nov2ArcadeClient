import React from "react";

import Logo from "../style/imgs/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} onClick={() => this.nexPath("/")}></img>
    </div>
  );
}

import React from "react";
import { StyledNav } from "./Navbar.styles";
import Logo from "../../../assets/img/logo.png";

const Navbar = () => {
  return (
    <StyledNav>
      <img src={Logo} alt="" />
      <button>Menu</button>
    </StyledNav>
  );
};

export default Navbar;

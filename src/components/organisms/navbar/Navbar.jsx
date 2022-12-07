import React, { useState } from "react";
import { StyledNav } from "./Navbar.styles";
import Logo from "../../../assets/img/logo.png";
import LogoDark from "../../../assets/img/logoDark.png";
import { Link } from "react-router-dom";
import HideMenu from "../hideMenu/HideMenu";
import MenuLink from "../../atoms/menuLink/MenuLink";

const Navbar = ({ isdark }) => {
  const [isMenu, setMenuSate] = useState(false);

  const clickHandler = () => {
    setMenuSate((prev) => !prev);
  };

  return (
    <>
      <StyledNav isdark={isdark}>
        <Link to="/">
          <img src={isdark ? LogoDark : Logo} alt="" />
        </Link>
        <menu>
          <MenuLink isdark={isdark} path="/" label="Strona główna" />
          <MenuLink
            isdark={isdark}
            path="/kontakt"
            label="Kontakt z kancelarią"
          />
          <MenuLink
            isdark={isdark}
            path="/rewir-komorniczy"
            label="Rewir komorniczy"
          />
          <MenuLink
            isdark={isdark}
            path="/wnioski"
            label="Wnioski do pobrania"
          />
          <button onClick={clickHandler}>Menu</button>
        </menu>
      </StyledNav>
      <HideMenu isMenu={isMenu} onClick={clickHandler} />
    </>
  );
};

export default Navbar;

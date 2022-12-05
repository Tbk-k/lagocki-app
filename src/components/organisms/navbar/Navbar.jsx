import React, { useState } from "react";
import { StyledNav } from "./Navbar.styles";
import Logo from "../../../assets/img/logo.png";
import LogoDark from "../../../assets/img/logoDark.png";
import { Link } from "react-router-dom";
import HideMenu from "../hideMenu/HideMenu";
import MenuLink from "../../atoms/menuLink/MenuLink";

const Navbar = ({ isDark }) => {
  const [isMenu, setMenuSate] = useState(false);

  const clickHandler = () => {
    setMenuSate((prev) => !prev);
  };

  return (
    <>
      <StyledNav isDark={isDark}>
        <Link to="/">
          <img src={isDark ? LogoDark : Logo} alt="" />
        </Link>
        <menu>
          <MenuLink isDark={isDark} path="/" label="Strona główna" />
          <MenuLink
            isDark={isDark}
            path="/kontakt"
            label="Kontakt z kancelarią"
          />
          <MenuLink
            isDark={isDark}
            path="/rewir-komorniczy"
            label="Rewir komorniczy"
          />
          <MenuLink
            isDark={isDark}
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

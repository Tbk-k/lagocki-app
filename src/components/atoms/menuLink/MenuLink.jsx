import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  width: fit-content;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.regular};
  div {
    width: 100%;
    height: 2px;
    background-color: ${({ isDark }) =>
      isDark ? "black" : ({ theme }) => theme.colors.white};
    transform: scale(0, 1);
    transition: transform 0.5s ease-in-out;
    transform-origin: 100% 0%;
    margin: 0;
    padding: 0;
    border-radius: 10px;
  }
  &:hover div {
    transform: scale(1);
    transform-origin: 0% 100%;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 35px;
  }
`;

const MenuLink = ({ path, label, isDark }) => {
  return (
    <li style={{ width: "fit-content" }}>
      <StyledLink to={path} isDark={isDark}>
        {label}
        <div />
      </StyledLink>
    </li>
  );
};

export default MenuLink;

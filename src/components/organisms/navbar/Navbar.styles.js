import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  a {
    height: 120px;
    z-index: 10;
    img {
      height: 100%;
      cursor: pointer;
    }
  }

  menu {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 2;
    li {
      display: none;
      a {
        font-size: 14px;
        color: ${({ isdark }) =>
          isdark ? "black" : ({ theme }) => theme.colors.white};
      }
    }
    button {
      border: none;
      font-family: ${({ theme }) => theme.fonts.h1};
      color: ${({ isdark }) =>
        isdark ? "black" : ({ theme }) => theme.colors.white};
      cursor: pointer;
      background-color: transparent;
      font-size: 30px;
    }
  }
  @media only screen and (min-width: 1024px) {
    a {
      height: 150px;
    }
    menu {
      z-index: 10;
      li {
        display: block;
        a {
          font-size: 16px;
        }
      }
      button {
        margin-left: 10px;
        font-size: 32px;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    menu {
      li {
      }
      button {
        margin-left: 30px;
      }
    }
  }
`;

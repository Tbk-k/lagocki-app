import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  img {
    height: 80%;
    cursor: pointer;
  }
  button {
    border: none;
    font-family: ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    background-color: transparent;
    font-size: 30px;
  }
`;

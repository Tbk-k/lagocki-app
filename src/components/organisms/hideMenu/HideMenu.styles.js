import styled from "styled-components";

export const StyledSection = styled.section`
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  flex-direction: column;
  display: ${({ isMenu }) => (isMenu ? "flex" : "none")};
  svg {
    position: absolute;
    fill: ${({ theme }) => theme.colors.white};
    top: 20px;
    right: 20px;
    font-size: 40px;
    z-index: 20;
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  flex: 4;
  height: 100%;
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex: 5;
    flex-direction: column-reverse;
    height: 100vh;
  }
`;

export const StyledMenu = styled.menu`
  background-color: ${({ theme }) => theme.colors.brown};
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  img {
    position: absolute;
    height: 120px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
  li {
    margin: 5px 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 60px 20px;
    justify-content: flex-start;
    flex: 2;
    img {
      display: block;
    }
  }
  @media only screen and (min-width: 1440px) {
    padding: 80px 20px;
    img {
      height: 150px;
    }
  }
`;

export const MapWrapper = styled.div`
  padding: 40px;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  iframe {
    border: none;
    width: 90%;
    height: 200px;
    border-radius: 30px;
  }
  @media only screen and (min-width: 1024px) {
    iframe {
      height: 400px;
      width: 100%;
    }
  }
`;

export const InfoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 40px 20px;
  div {
    padding: 0 30px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 50px;
    max-width: 400px;
    &[repay="true"] {
      display: none;
    }
    h3 {
      font-size: 22px;
      font-family: ${({ theme }) => theme.fonts.h1};
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    div {
      flex: 1;
      &[repay="true"] {
        display: block;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    div {
      h3 {
        font-size: 35px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

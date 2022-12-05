import styled from "styled-components";
import HeroBg from "../../../assets/img/themis.jpeg";

export const Wrraper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 800px;
  background: url(${HeroBg}) no-repeat;
  background-size: cover;

  &::after {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    min-height: 800px;
  }
  &::before {
    background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
    width: 100%;
    height: 100%;
    min-height: 800px;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 60px;
  padding: 10px 30px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  h1 {
    color: white;
    font-size: 51px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
  div {
    width: fit-content;
    margin: 0 auto;
    max-width: 500px;
    hr {
      display: block;
    }
  }
  button {
    background-color: transparent;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: ${({ theme }) => `1px solid ${theme.colors.white}`};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.regular};
  }
  hr {
    border: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
    margin: 30px auto;
    width: 80%;
    display: none;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    padding: 0 15px;
    line-height: 1.45;
  }
  @media only screen and (min-width: 400px) {
    h1 {
      font-size: 60px;
    }
  }
  @media only screen and (min-width: 768px) {
    bottom: 30px;
    h1 {
      font-size: 80px;
      margin-bottom: 10px;
    }
    hr {
      display: block;
      max-width: 620px;
    }

    div {
      display: flex;
      max-width: 600px;
      gap: 30px;
      align-items: center;
      button {
        flex-shrink: 0;
      }
      hr {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    bottom: 100px;
    flex-direction: row-reverse;
    align-items: flex-end;
    h1 {
      flex: 4;
      margin-bottom: 50px;
      hr {
        display: none;
      }
    }
    div {
      flex-direction: column-reverse;
      flex: 2;
      height: 80vh;
      border-right: ${({ theme }) => `1px solid ${theme.colors.white}`};
      gap: 0;
      align-items: start;
      p {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.white}`};
        margin: 20px 20px 60px;
        padding-bottom: 40px;
        font-size: 16px;
        max-width: 400px;
      }
      button {
        width: 150px;
        height: 150px;
        font-size: 16px;
        margin-left: 30px;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    h1 {
      flex: 3;
      font-size: 120px;
      margin-bottom: 100px;
    }
    div {
      flex: 1;
    }
  }
`;

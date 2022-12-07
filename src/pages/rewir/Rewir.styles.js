import styled from "styled-components";
import HeroBg from "../../assets/img/themis.jpeg";

export const StyledSection = styled.section`
  width: 100vw;
  height: 60vh;
  background: url(${HeroBg}) no-repeat;
  background-size: cover;
  position: relative;
  min-height: 800px;
  &::after {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
  }
  &::before {
    background: linear-gradient(1turn, #0c0c0c, #0d0d0d29);
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  span {
  }
`;

export const InnerWrapper = styled.div`
  padding: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  label {
    font-family: ${({ theme }) => theme.fonts.regular};
    margin: 20px 0 10px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
  }
  div {
    input {
      display: block;
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.regular};
      outline: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 20px;
      margin-bottom: 30px;
    }
    &[isfocus="true"] {
      label {
        opacity: 1;
      }
      input::placeholder {
        opacity: 0;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.cream};
    border: none;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-transform: uppercase;
    width: 80%;
    max-width: 400px;
    padding: 10px;
    font-size: 16px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
    cursor: pointer;
    -webkit-box-shadow: 0px 14px 19px -13px #ffdbb4;
    -moz-box-shadow: 0px 14px 19px -13px #ffdbb4;
    box-shadow: 0px 14px 19px -13px #ffdbb4;
    svg {
      margin-top: 0;
      fill: ${({ theme }) => theme.colors.brown};
      font-size: 18px;
    }
    &:hover {
      background-color: #e9c49c;
    }
  }
`;

export const StyledAlert = styled.aside`
  width: 100%;
  display: flex;
  background-color: ${({ alert }) => (alert ? "#2c2a28ba" : "transparent")};
  padding: 6px 15px;
  border-radius: 5px;
  margin: 40px auto;
  justify-content: ${({ alert }) => (alert ? "flex-start" : "flex-end")};
  margin: ${({ alert }) => (alert ? "40px auto" : "40px auto 0")};
  cursor: pointer;
  svg {
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 4px;
    cursor: ${({ alert }) => (alert ? null : "info")};
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
    padding: 8px;
    margin: 0;
    display: ${({ alert }) => (alert ? "block" : "none")};
  }
`;

export const StyledAns = styled.div`
  padding: 30px 10px;
  display: block;
  p {
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
    font-size: 18px;
    margin: 0;
    max-width: 450px;
    &:first-of-type {
      font-family: ${({ theme }) => theme.fonts.h1};
      font-size: 30px;
    }
    &:last-of-type {
      margin-top: 20px;
    }
  }
`;

export const StyledError = styled.div`
  background-color: #2c121082;
  z-index: 10;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #f4c7c7;
  font-size: 14px;
  margin: 0 auto 15px;
  padding: 6px 15px;
  border-radius: 5px;
  max-width: 300px;
  text-align: center;
`;

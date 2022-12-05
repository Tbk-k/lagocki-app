import styled from "styled-components";
import BgImg from "../../../assets/img/img.jpeg";

export const StyledSection = styled.section`
  padding: 60px 40px;
  div:first-of-type {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: url(${BgImg});
    background-size: 400px 300px;
    background-repeat: no-repeat;
    position: relative;
    display: none;
    &::after {
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
  div:last-of-type {
    max-width: 600px;
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 45px;
    margin-top: 0;
  }
  p {
    padding: 0 20px;
    line-height: 1.4;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    div:first-of-type {
      display: block;
    }
  }
`;

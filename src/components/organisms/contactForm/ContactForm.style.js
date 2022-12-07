import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 20px 80px;
  p {
    width: 250px;
  }
  svg {
    height: 25px;
    margin-top: 30px;
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 40px;
    margin-top: 5px;
  }
  form {
    label {
      font-family: ${({ theme }) => theme.fonts.regular};
      margin: 20px 0 10px;
      opacity: 0;
    }
    div {
      input,
      textarea {
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
        input::placeholder,
        textarea::placeholder {
          opacity: 0;
        }
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.cream};
      border: none;
      font-family: ${({ theme }) => theme.fonts.regular};
      text-transform: uppercase;
      width: 40%;
      max-width: 200px;
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
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    gap: 150px;
    justify-content: center;
    padding: 100px 20px;
    p {
      flex: 1;
      max-width: 300px;
      font-size: 22px;
      line-height: 1.3;
    }
    svg {
      height: 35px;
    }
    h2 {
      font-size: 55px;
      margin-bottom: 30px;
    }
    div {
      flex: 2;
      max-width: 800px;
    }
    form {
      div {
        width: 47.5%;
        display: inline-block;
        &:nth-of-type(1),
        &:nth-of-type(3) {
          margin-right: 5%;
        }
        &:nth-of-type(5) {
          width: 100%;
        }
      }
    }
  }
`;

export const StyledAlert = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #2c2a28ba;
  padding: 6px 15px;
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  svg {
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 4px;
  }
  p {
    width: 100%;
  }
`;

import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  h2 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  p {
    max-width: 700px;
    line-height: 1.3;
  }
  ul {
    list-style: none;
    margin: 30px 0 60px;
    padding: 0;
    li {
      a {
        padding: 20px 0;
        width: 100%;
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: black;
        cursor: pointer;
        border-bottom: 1px solid black;
      }
      &:first-child {
        border-top: 1px solid black;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: 55px;
    }
    p {
      font-size: 22px;
      max-width: 800px;
    }
    ul {
      margin: 50px auto 60px;
      li {
        a {
          font-size: 22px;
        }
        svg {
          font-size: 25px;
        }
      }
    }
  }
`;

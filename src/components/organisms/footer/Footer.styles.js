import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 8;
  }
`;

export const StyledLinks = styled.div`
  padding: 0px 40px 30px;
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
  flex: 3;
  position: relative;
  img {
    display: none;
  }
  h3 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 28px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.white};
  }
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 10px 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    border: none;
    border-right: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
    img {
      height: 150px;
      position: absolute;
      display: block;
      bottom: 20px;
    }
    h3 {
      font-size: 35px;
      padding: 0 20px;
    }
    menu {
      li {
        a {
          font-size: 25px;
        }
      }
    }
  }
`;

export const FilesWrapper = styled.div`
  border-bottom: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 40px;
  padding-bottom: 50px;
  h3 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 28px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 0 20px;
    li {
      padding: 7px 0;
      &:nth-of-type(even) {
        padding-left: 20px;
      }
    }
    hr {
      width: 200px;
      margin: 2px 0 0;
      border: ${({ theme }) => `0.5px solid ${theme.colors.white}`};
    }
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: ${({ theme }) => theme.fonts.regular};
      cursor: pointer;
      svg {
        font-size: 34px;
        fill: ${({ color }) => color};
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    padding: 20px 100px 50px;
  }
`;

export const InfoWrapper = styled.div`
  padding: 20px 40px;
  color: ${({ theme }) => theme.colors.white};
  img {
    height: 100px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.h1};
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    padding-left: 20px;
    max-width: 400px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 20px 100px;

    img {
      display: none;
    }
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-around;
  }
`;

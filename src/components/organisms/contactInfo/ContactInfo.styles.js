import styled from "styled-components";

export const StyledSection = styled.section``;

export const Wrapper = styled.div`
  padding: 20px;
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const Item = styled.div`
  padding: 20px;
  border-bottom: 0.5px solid #c4c4c4;
  margin-bottom: 30px;
  max-width: 400px;
  flex: 1;
  &:last-of-type {
    border-bottom: 0;
  }
  svg {
    height: 28px;
  }
  h3 {
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.h1};
    margin: 10px auto 25px;
  }
  p {
    font-size: 14px;
    padding: 0 10px;
  }
  @media only screen and (min-width: 1024px) {
    border-bottom: none;
    border-right: 0.5px solid #c4c4c4;
    &:last-of-type {
      border-right: none;
    }
    svg {
      height: 35px;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
`;

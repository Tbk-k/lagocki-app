import styled from "styled-components";

export const StyledSection = styled.section``;

export const StyledHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.h1};
  font-size: 55px;
  padding-bottom: 20px;
  margin: 30px 40px 40px;
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto 60px;
`;

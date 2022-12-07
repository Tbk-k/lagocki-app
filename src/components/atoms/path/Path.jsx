import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const StyledSpan = styled.span`
  color: ${({ isdark }) =>
    isdark ? "black" : ({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 25px 10px;
  text-transform: capitalize;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 15px;
      fill: ${({ isdark }) =>
        isdark ? "black" : ({ theme }) => theme.colors.white};
    }
  }
`;

const Path = ({ path, isdark }) => {
  return (
    <StyledSpan isdark={isdark}>
      <Link to="..">
        <HomeIcon />
      </Link>
      Home | {path}
    </StyledSpan>
  );
};

export default Path;

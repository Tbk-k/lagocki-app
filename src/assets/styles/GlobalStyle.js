import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    margin: 0;
    &::-webkit-scrollbar{
        display: none;
    }
}
p{
    font-family: ${({ theme }) => theme.fonts.regular};;
}
`;

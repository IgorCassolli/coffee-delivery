import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 32px 160px 150px 160px;
        background-color: ${props => props.theme.BACKGROUND};
    }
    
`
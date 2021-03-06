import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";
import { ThemeTypes } from "./theme";
const GlobalStyles = createGlobalStyle<{ theme: ThemeTypes }>`

    ${reset}
    ${normalize}

    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }   

    html,body{
        height: 100vh;
        overflow-x: hidden;
        background: ${(props) => props.theme.background};
      
        font-family: 'Poppins', sans-serif;
    }
    #__next{
        height: 100vh;
        overflow-x:hidden;
        position: relative;
    }

    h1,h2,h3,h4,h5{
        font-weight: bold;
        margin: 0;
    }

    h1{
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
    h2{
        font-size: ${({ theme }) => theme.fontSizes.lg};

    }

    h3{
        font-size: ${({ theme }) => theme.fontSizes.md};
    }

    a{
        color: black;
        text-decoration: none;
    }

    button{
        padding: 0;
        margin: 0;
        border: 0;
        background-color: white;
        cursor: pointer;
    }


`;

export default GlobalStyles;

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
    #root{
        height: 100vh;
        overflow-x:hidden;
        position: relative;
    }



`;

export default GlobalStyles;
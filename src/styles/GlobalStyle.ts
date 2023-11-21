import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";


export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     background-color: #0E1014;
  
}


section {
  min-height: 100%;
  overflow: hidden;

  @media ${Theme.media.mobile}{
    min-height: 100%;
    overflow: hidden;
  }


}


ul {
  list-style: none;
}

a{
  text-decoration: none;
}
`
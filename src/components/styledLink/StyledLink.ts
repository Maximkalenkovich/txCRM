import styled from "styled-components";
import {font} from "../../styles/Common";
import {Theme} from "../../styles/Theme";


export const Link = styled.a`
  ${font({family: "'Inter', sans-serif", weight: 500, fmax: 16, fmin:12})}
    color: var(--light-text, #E4E5EA);
    line-height: normal;
  
  @media ${Theme.media.tablet}{
      text-transform: uppercase;
  }
  
  &:hover{
    cursor: pointer;
    color: red;
  }

`
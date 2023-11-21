import { Icon } from "./icon";
import React from "react";
import styled from "styled-components";

export const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <div>
                <Icon iconId={"logo1"} width={'35'} height={'24'} viewBox={"0 0 35 24"} />
                <Icon iconId={'logo2'} width={'97'} height={'15'} viewBox={"0 0 97 15"}/>
            </div>

            <LogoText>крупный интегратор CRM в Росcии и ещё 8 странах</LogoText>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`

// пропадает логотип
  @media screen and (max-width: 935px) {
    & {
     display: none;
    }
  }
  //для удобного центрирования иконок
div {
  display: flex;
  gap:8px;

}
`

const LogoText = styled.p`
  color: #E4E5EA;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: normal;
  width: 165px;
  text-align: start;
 
`

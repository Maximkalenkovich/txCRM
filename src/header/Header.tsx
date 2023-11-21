import {Icon} from "../components/images/icon";
import {Logo} from "../components/images/Logo";
import styled from "styled-components";
import {FlexWrapper} from "../components/wrapper/FlexWrapper";
import {Container} from "../components/container/Container";
import {Link} from "../components/styledLink/StyledLink";
import {Theme} from "../styles/Theme";



export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>

                    <ul>
                        <li><Link href={'#'}>Услуги</Link></li>
                        <li><Link href={'#'}>Виджеты</Link></li>
                        <li><Link href={'#'}>Интеграции</Link></li>
                        <li><Link href={'#'}>Кейсы</Link></li>
                        <li><Link href={'#'}>Сертификаты</Link></li>
                    </ul>

                    <span>+7-555-555-55-55</span>
                    {/*icons messengers*/}
                    <IconMenu>
                        <Icon iconId={'telegram'}/>
                        <Icon iconId={'viber'}/>
                        <Icon iconId={'whatsapp'}/>
                    </IconMenu>

                </FlexWrapper>
            </Container>


        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  padding: 27px 0;
  list-style: none;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  @media screen and (min-width: 643px) {
      & {
      position: fixed;
     
      }
    }
  
  // menu navigation
  ul {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 630px) {
      li:last-child {
        display: none;
      }
    }


    @media screen and (max-width: 630px) {
      &{
        display: flex;
        gap:16px;
        justify-content: space-around;
        margin-left: 10px;
      }
    }
  }
   

  //number phone
  span {
    color: #E4E5EA;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    
    @media screen and (max-width: 780px) {
      & {
        display: none;
      }
    }
  }
`

const IconMenu = styled.div`
    display: flex;
  gap:30px;

  @media screen and (max-width: 630px) {
  & {
    display: none;
  }
}
  
`

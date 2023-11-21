import {Container} from "../components/container/Container";
import styled from "styled-components";
import {Link} from "../components/styledLink/StyledLink";
import {Icon} from "../components/images/icon";
import {FlexWrapper} from "../components/wrapper/FlexWrapper";
import { Theme } from "../styles/Theme";




export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} wrap="wrap">
 {/*// блок для раздела "о компании" /*/}
                        <div>
                            <h4>О КОМПАНИИ</h4>
                            <ul>
                                <li><Link href={'#'}>Партнерская программа</Link></li>
                                <li><Link href={'#'}>Вакансии</Link></li>
                            </ul>
                        </div>
                    {/*// блок для раздела "меню" /*/}
                        <div>
                            <h4>МЕНЮ</h4>
                            <ul>
                                <li><Link href={'#'}>Расчёт стоимости</Link></li>
                                <li><Link href={'#'}>Услуги</Link></li>
                                <li><Link href={'#'}>Виджеты</Link></li>
                                <li><Link href={'#'}>Интеграции</Link></li>
                                <li><Link href={'#'}>Наши клиенты</Link></li>
                                <li><Link href={'#'}>Кейсы</Link></li>
                                <li><Link href={'#'}>Благодарственные письма</Link></li>
                                <li><Link href={'#'}>Сертификаты</Link></li>
                                <li><Link href={'#'}>Блог на Youtube</Link></li>
                                <li><Link href={'#'}>Вопрос/Ответ</Link></li>
                            </ul>
                        </div>
                    {/*// блок для раздела "контакты" /*/}
                        <CompaniInform>
                            <h4>КОНТАКТЫ</h4>
                            <ul>
                                <li><Link href={'#'}>+7-555-555-55-55</Link></li>
                                <li><Icon iconId={'telegram'}/>
                                    <Icon iconId={'viber'}/>
                                    <Icon iconId={'whatsapp'}/>
                                </li>
                                <li><Link href={'#'}>Москва, Путевой проезд 3с1, к 902</Link></li>
                            </ul>
                        </CompaniInform>
                </FlexWrapper>

                <p>
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <span>Политика конфиденциальности</span>
                </p>
            </Container>


        </StyledFooter>
    )
}

const StyledFooter = styled.footer`

margin-top: 145px;

@media ${Theme.media.tablet}{
  margin-top: 45px;
}

div{
  @media screen and (max-width: 860px){
  &{
    margin-top:30px ;
    margin-left: 5px;
    margin-bottom: 30px;
  }
}
}

  p{
 display:flex;
    flex-direction: column;
    text-align: right;
    margin-top: 33px;
    span {
      color:  #E4E5EA;
      font-family: Montserrat,sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      
    }

    @media screen and (max-width: 860px){
      margin-top: 50px;
    text-align: left;
  }
}
  
   

 li{
   text-align:left ;
   margin-top: 10px;
   
 }
  
     h4 {
      color:#656566;
      font-family: Inter, sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      text-align: left;
    }
  
  div:nth-child(2) {
    ul {
      -moz-column-count: 2; /* Firefox */
      -webkit-column-count: 2; /* Safari and Chrome */
      column-count: 2;
    }


   
  }
  
`

const CompaniInform = styled.div`
h4{
  text-align: right;
  @media screen and (max-width: 860px){

    text-align: left;
  }
}
    li{
      text-align: right;

      @media screen and (max-width: 860px){
        text-align: left;
      }

    }

  
  @media screen and (max-width: 860px) {
      & {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
       
      }
    
}
`









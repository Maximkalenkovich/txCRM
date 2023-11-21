import styled from "styled-components";
import {PresentText} from "./present/PresentText";
import {Container} from "../components/container/Container";
import {FlexWrapper} from "../components/wrapper/FlexWrapper";
import  blue  from '../components/images/purplelight.png'
import red from '../components/images/redlight.png'
import { font } from '../styles/Common';



const PresentData = [
    {
     title:"Виджеты",
    text:"30 готовых решений"
},
    {
        title:"Dashboard",
        text:" с показателями вашего бизнеса"
    },
    {
        title:"Skype Аудит",
        text:"отдела продаж и CRM системы"
    },
    {
        title:"35 дней",
        text:"использования CRM"
    }
]

export const Main = () =>{

    return(
        <SectionMain>


            <Container>
                <FlexWrapper justify={'space-between'} wrap="wrap" >
               <DivTitle>

                   <TitleMain>
                       <h1>Зарабатывайте больше <span>с WELBEX</span> </h1>
                       <p>Развиваем и контролируем продажи за вас</p>
                   </TitleMain>
               </DivTitle>


               <PresentContainer>
                   <PresentTitle> Вместе с <span>бесплатной консультацией</span>  мы дарим:</PresentTitle>

<div>
    {/*//решил сделать через пропсы чтобы не засорять тоннами кода*/}

    {PresentData.map((p, index:number)=>{
        return(
            <PresentText key={index}
                         title={p.title}
                         text={p.text} />

        )
    })}
</div>
                   <button>Получить консультацию</button>
               </PresentContainer>
           </FlexWrapper>
            </Container>
        </SectionMain>
    )
}


const SectionMain = styled.section`
// blue back
    background: url("${blue}") 60% bottom no-repeat  ;

 
  
`
const DivTitle = styled.div`
  background-image: url('${red}');
  background-repeat: no-repeat;
  background-size: cover;
background-position-x: 75%;

`

// контэйнер для списка подарков
const PresentContainer = styled.div`
  display: flex;
  margin-top: 224px;
  flex-direction: column;
  text-align: right;
  max-width: 350px;

  @media screen and (max-width: 642px) {
  & {
    margin-top: 45px;
    text-align:left;
    margin-left: 14px;
    margin-bottom: 10px;
  }
}
  
  
  // сделал так для удобной растановки в колонки
  div{
    column-count: 2;
    column-gap: 4%;

    @media screen and (max-width: 642px) {
  & {
    text-align:left;
    margin-left: 14px;

  }
}
  }
  
  // кнопка здесь одна поэтому стилизовал так
  button {
    width: 262px;
    height: 61px;
    margin-left: auto;
    color: #E4E5EA ;
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    background-color: #4077F3;
    cursor: pointer;
    margin-top: 31px;

    @media screen and (max-width: 642px) {
  & {
    display: none;
    
  }
}
  }
 
`
// наазвание списка подарков
const PresentTitle = styled.h2`
  color: #E4E5EA;
  font-family: Inter,sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 40px;
  span{
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(to right, #FCB045, #FD1D1D);
    text-transform: uppercase;
  }
`

// основная часть для бота smm
const TitleMain = styled.div`
display: flex;
  flex-direction: column;
  margin-top: 209px;
  text-align: left;


  // растояние от верхнего
  
  @media screen and (max-width: 642px) {
  & {
    margin-top: 40px;
  }

  //расстояние слева

  @media screen and (max-width: 642px) {
  & {
    margin-left: 14px;
    
  }
}
}

    h1{
      ${font({family: "'Inter', sans-serif", weight: 400, fmax: 48, fmin:36})}
      color: #E4E5EA;
      line-height: normal;
      max-width: 150px;
      
   span{
    ${font({family: "'Inter', sans-serif", weight: 900, fmax: 36, fmin:36})}
     color: #E4E5EA;
     line-height: normal;
     white-space: nowrap;
     -webkit-text-fill-color: transparent;
     -webkit-background-clip: text;
     -webkit-box-decoration-break: clone;
     background-image: linear-gradient(to right, #FCB045, #FD1D1D);
     text-transform: uppercase;
   }
     
   }
  
  p{
    color: var(--light-text, #E4E5EA);
    font-family: Montserrat,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 275px;
    margin-top: 30px;
  }
`


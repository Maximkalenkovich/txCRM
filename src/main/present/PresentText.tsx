import styled from "styled-components";
import { font } from '../../styles/Common';
import { Theme } from "../../styles/Theme";



type PresentPropsType = {
    title: string
    text: string
}
export const PresentText = (props: PresentPropsType) =>{


    return(
        <NamePresent>
            <Title> {props.title}</Title>
            <Text>{props.text} </Text>
        </NamePresent>
    )
}

const NamePresent = styled.div`
   text-align: right;
display: flex;
flex-direction: column;

`


const Title = styled.h2`
${font({family: "'Inter', sans-serif", weight: 500, fmax: 18, fmin:13})}
  color:  #E4E5EA;
  line-height: normal;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  @media screen and (max-width: 642px) {
  & {
   margin-bottom: 14px;
  }
} 

@media ${Theme.media.mobile}{
  font-weight: 400;
line-height: normal;
letter-spacing: 0.65px;
text-transform: uppercase;
font-family: 'Montserrat';
   


}

position: relative;

&::before{
   content: '';
   display: inline-block;
   width: 10px;
   height: 1px;
   background-color: white;
   position: absolute;
   left: -10%;
   bottom: 50%;
   background: linear-gradient(to right, #FCB045 36.99%, #FD1D1D 100%);

   @media screen and (min-width: 642px) {
  & {
     display: none;
  }
} 
}

`
const Text = styled.text`
${font({family: "'Montserrat', sans-serif", weight: 500, fmax: 16, fmin:13})}
  color: #E4E5EA;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
  
  @media ${Theme.media.mobile}{
    display: none;
  }

`
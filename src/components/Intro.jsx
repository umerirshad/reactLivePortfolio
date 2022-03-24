import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import styledComponents from 'styled-components';
import woman from "../img/woman.png";
import AnimatedShapes from './AnimatedShapes';



const Container = styledComponents.div`
height: calc(100vh - 50px);
display: flex;
padding:20px;
@media only screen and (max-width : 480px){
  flex-direction: column;
}
`;

const Left = styledComponents.div`
width: 60%;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
@media only screen and (max-width : 480px){
  width: 100%;
  height:100%;
}
`;

const Title = styledComponents.h1`
font-size:60px;
width:60%;
@media only screen and (max-width : 480px){
  width: 100%;
  font-size:50px;
}
`;

const Desc = styledComponents.p`
width: 60%;
font-size:20px;
@media only screen and (max-width : 480px){
  width: 100%;
}
`;
const Info = styledComponents.div`
width: 60%;
margin-top:50px;
display:flex;
justify-content: space-between;
align-items:center;
@media only screen and (max-width : 480px){
  width: 100%;
  flex-direction: column;
} 
`;
const Button = styledComponents.button`
padding: 15px;
background-color:darkblue;
color:white;
border-radius:10px;
font-weight:bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
@media only screen and (max-width : 480px){
  margin-bottom:20px;
}
`;
const Contact = styledComponents.div`
display: flex;
flex-direction: column;
`;
const Phone = styledComponents.span`
color: #f0667d;
font-weight: bold;
`;
const ContactText = styledComponents.span`
color: gray;
margin-top: 5px;
`;
const Right = styledComponents.div`
width: 40%;
@media only screen and (max-width : 480px){
  display:none;
}
`;
const Image = styledComponents.img`
width:100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
          </Desc>
          <Info>
            <Button>
              <Link to='contact' smooth>
              START A PROJECT
              </Link>
              </Button>
            <Contact>
              <Phone>Call Us (+92) 305 - 6877105</Phone>
              <ContactText>For any question or concern</ContactText>
            </Contact>
            </Info>
      </Left>
      <Right><Image src={woman}/></Right>
      <AnimatedShapes/>
    </Container>
  )
}

export default Intro
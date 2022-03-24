import React from 'react';
import styledComponents from 'styled-components';
import How from "../img/how.png";
import MiniCard from './MiniCard';
import play from "../img/play.png"
import { useState } from 'react';
import Dev from '../img/devTwo.png';
import Clip from '../img/clipBord.png';
import Resp from '../img/respon.png';
import Credit from '../img/credit.png';
import Content from '../img/content.png';
import Help from '../img/help.png';


const Container = styledComponents.div`
display:flex;
height:100%;
@media only screen and (max-width : 480px){
  flex-direction:column;
}
`;    
const Left = styledComponents.div`
width:50%;
position: relative;
@media only screen and (max-width : 480px){
  display:none;
}
`;
const Image = styledComponents.img`
display: ${(props) => props.open && "none"};
height:100%;
margin-left:100px;
`;   
const Video = styledComponents.iframe`
display:${(props) => !props.open && "none"};
height:250px;
width:500px;
position: absolute;
top:0;
bottom:0;
right:0;
margin:auto;
@media only screen and (max-width : 480px){
  width:100%;
}
`; 
const Right = styledComponents.div`
width:50%;
@media only screen and (max-width : 480px){
  width:100%;
}
`;    
const Wrapper = styledComponents.div`
padding: 50px;
display:flex;
flex-direction:column;
@media only screen and (max-width : 480px){
  padding:20px;

}
`;
const Title = styledComponents.h1``;
const Desc = styledComponents.p`
font-size:20px;
margin-top: 20px;
color:#555;
`;

const CardContainer = styledComponents.div`
display:flex;
justify-content:space-between;
margin-top:40px;
`; 
const Button = styledComponents.div`
width:180px;
border:none;
border-radius:10px;
background-color:darkblue;
color:white;
font-size:20px;
padding:15px;
margin-top:15px;
cursor:pointer;
display:flex;
align-items:center;
@media only screen and (max-width : 480px){
  width:180px;
  margin-top:15px;
  font-size:16px;
}
`;

const Icon = styledComponents.img`
width:20px;
margin-right:10px;
`;

const Modal = styledComponents.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.5);
`;

const CloseButton = styledComponents.button`
position: absolute;
background-color: white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30%;
`;

const Service = () => {
  const [open, setOpen] = useState(false); 
  const smallScreen = window.screen.width <= 480 ? true : false;   
  return (

    <Container id='services'>
        <Left>
          <Image open={open} src={How}/>
      

          <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://www.youtube.com/embed/Y9dLVLm8_pw?controls=0&autoplay=1" 
          />
           <CloseButton onClick={() => setOpen(false)}>
           
          </CloseButton>
          
        </Left>
        <Right>
          <Wrapper>
            <Title>
            Simple process to start
            </Title>
            <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources.
            </Desc>
            <CardContainer>
              <MiniCard title="Design & Development" img={Dev}/>
              
              <MiniCard title="Website Audit" img={Clip}/>
              <MiniCard title="Mobile Friendly" img={Resp}/>
            </CardContainer>
            <CardContainer>
              <MiniCard title="eCommerce" img={Credit}/>
              <MiniCard title="Content Mangment" img={Content}/>
              <MiniCard title="Help & Support" img={Help}/>
            </CardContainer>
            <Button onClick={() => setOpen(true)}>
              <Icon src={play}/>
              How It Works.
            </Button>
          </Wrapper>
        </Right>
        {smallScreen && open &&(

          <Modal>
          <Video
          open={open}
          autoPlay
          controls
          loop
          src='https://www.youtube.com/embed/z2OXnXu3_nc?controls=0&autoplay=1'
          />
          <CloseButton onClick={() => setOpen(false)}>
            Close
          </CloseButton>
        </Modal>
          )}
    </Container>
  )
}

export default Service
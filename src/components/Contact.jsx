import React from 'react';
import styledComponents from 'styled-components';
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";
import FB from "../img/fb.png";
import TW from "../img/tw.png";
import GIT from "../img/git.png";
import IG from "../img/ig.png";



const Container = styledComponents.div`
  height: 90%;
  background: url("https://i0.wp.com/www.artdega.org/wp-content/uploads/2020/08/double-bubble-outline.png");

`;
const Wrapper = styledComponents.div`

height: 100%;
padding:20px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width : 480px){
    flex-direction:column;
  }
`;

const FormContainer = styledComponents.div`
width:50%;
@media only screen and (max-width : 480px){
    width:100%;
  }
`;

const Title = styledComponents.h1`
margin: 50px;
margin-top:0;
@media only screen and (max-width : 480px){
    margin:20px;
  }
`;

const Form = styledComponents.div`
height:250px;
display:flex;
align-items: center;
justify-content: center;
@media only screen and (max-width : 480px){
    flex-direction:column;
  }
`;

const LeftForm = styledComponents.div`
height:100%;
display:flex;
flex-direction: column;
justify-content: space-between;
margin-right:20px;
@media only screen and (max-width : 480px){
    height:50%;
    margin-right:0;
  }
`;

const RightForm = styledComponents.div`
height:100%;
display:flex;
flex-direction: column;
justify-content: space-between;
@media only screen and (max-width : 480px){
    height:50%;
  }
`;

const Input = styledComponents.input`
width:200px;
padding:20px;
@media only screen and (max-width : 480px){
    padding:5px;
  }
`;

const TextArea = styledComponents.textarea`
width:200px;
height:60%;
padding:20px;
@media only screen and (max-width : 480px){
    padding:5px;
    margin-top:20px;
  }
`;

const Button = styledComponents.button`
border:none;
padding: 15px;
background-color: darkblue;
color:white;
font-size:20px;
border-radius:10px;
margin-top:20px;
cursor:pointer;
@media only screen and (max-width : 480px){
    padding:5px;
    font-size:14px;
  }
`;

const AddressContainer = styledComponents.div`
width:50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width : 480px){
    width:100%;
    margin-top:20px;
  }
`;

const AddressItem = styledComponents.div`
display:flex;
align-items: center;
margin-bottom: 30px;
@media only screen and (max-width : 480px){
    margin-bottom:20px;
  }
`;

const Icon = styledComponents.img`
width:20px;
margin-right:20px;
@media only screen and (max-width : 480px){
    width:15px;
  }
`;

const Text = styledComponents.span`
font-size:20px;
margin-right:0px 15px 0px 15px;
@media only screen and (max-width : 480px){
    font-size:14px;
  }
`;
const SocialContainer = styledComponents.div`
display: flex;
justify-content: center; 
`;

const SocialLinks = styledComponents.img`
width:30px;
margin-right:8px;
cursor:pointer;
@media only screen and (max-width : 480px){
  width:20px;
  margin-right:6px;
  cursor:pointer; 
}
`;



const Contact = () => {
  return (
    <Container id='contact'>
        <Wrapper>
            <FormContainer>
                <Title>
                    Questions? <br/> Let's Get In Touch.
                </Title>
                <Form>
                    <LeftForm>
                        <Input placeholder='Your Name'/>
                        <Input placeholder='Your Email'/>
                        <Input placeholder='Subject'/>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'/>
                        <Button>Send</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}/>
                    <Text>Bahawalpur, Pakistan</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}/>
                    <Text>+92 305 - 6877105</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}/>
                    <Text>info@epicmarketo.com</Text>
                </AddressItem>
                <SocialContainer>

                <SocialLinks src={FB}/>
                <SocialLinks src={TW}/>
                <SocialLinks src={IG}/>
                <SocialLinks src={GIT}/>
                </SocialContainer>
            </AddressContainer>
        </Wrapper>

    </Container>
  )
}

export default Contact
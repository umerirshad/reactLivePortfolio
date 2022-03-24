import React from 'react';
import styledComponents from 'styled-components';


const Container = styledComponents.div`
width: 100px;
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
cursor:pointer;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
@media only screen and (max-width : 480px){
  width:50px;
  font-size:14px;
  cursor:pointer;
}
`;

const Image = styledComponents.img`
width:40px;
@media only screen and (max-width : 480px){
  width:30px;
}

`;
const Title = styledComponents.span`
text-align:center;
margin-top:5px;
font-size:18px;
font-weight:bold;
@media only screen and (max-width : 480px){
  font-size:12px;
  margin-top:4px;
}
`;


// const Text = styledComponents.span`
// margin-top: 10px;
// text-align:center;
// `;

const MiniCard = ({img, title}) => {
  return (
    <Container>
        <Image src={img}></Image>
        <Title>{title}</Title>
        {/* <Text>
        Lorem ipsum dolor sit amet.
        </Text> */}
    </Container>
  )
}

export default MiniCard
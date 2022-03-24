import React from 'react'
import Link from 'react-scroll/modules/components/Link';
import styledComponents from 'styled-components'

const Container = styledComponents.div`
margin-right:50px;
padding:20px;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
background-color: white;
border-radius:10px;
display:flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width : 480px){
  margin-top:0;
  margin-bottom:10px;
  padding:10px;
}
`;

const PriceContainer = styledComponents.div`
display: flex;
align-items: center;
`;

const Price = styledComponents.span`
font-weight: bold;
font-size: 50px;
@media only screen and (max-width : 480px){
  font-size:30px; 
}
`;

const Type = styledComponents.button`
padding: 10px;
margin: 10px 0px;
border: 1.5px solid crimson;
color: crimson;
background-color: white;
border-radius:20px;
@media only screen and (max-width : 480px){
  display:none;
}
`;

const List = styledComponents.ul`
list-style:none;
`;

const ListItem = styledComponents.li`
margin:30px 0px;
@media only screen and (max-width : 480px){
  margin:10px;
  font-size:12px;
}
`;

const Button = styledComponents.button`
border:none;
background-color: darkblue;
color: white;
font-size: 16px;
font-weight: bold;
padding:15px;
border-radius:10px;
cursor:pointer;
@media only screen and (max-width : 480px){
  font-size:12px;
  padding:5px;
}
`;

const PriceCard = ({price, type}) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{price}</Price>/month
        </PriceContainer>
        <Type>{type}Plan</Type>
        <List>
            <ListItem>200 Hand-Crafted Templates</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>{" "}
        </List>
        <Button>
          <Link to='contact'>
          Join Now
          </Link>
          </Button>
    </Container>
  )
}

export default PriceCard
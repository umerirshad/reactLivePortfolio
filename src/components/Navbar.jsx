import React from 'react';
import styledComponents from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import "../App.css";

const Container = styledComponents.div`
height: 56px;
`;
const Wrapper = styledComponents.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-item:center;
`;

const Left = styledComponents.div`
width:60%;
display: flex;
align-items: center;
justify-content:space-between;
`;
const Logo = styledComponents.h1`
font-weight: bold;
text-decoration: underline crimson;
@media only screen and (max-width : 480px){
    font-size:24px;
    font-weight: bold;
}
`;
const Menu = styledComponents.ul`
display:flex;
list-style:none;
@media only screen and (max-width : 480px){
    display:none;
}
`;
const MenuItem = styledComponents.li`
margin-right:30px;
font-size:20px;
font-weight: bold;
color: grey;
text-decoration: none;
`;
const Button = styledComponents.button`
 border: 2px solid white;
 padding: 10px 15px;
 background-color: crimson;
 color: white;
 font-weight:bold;
 border-radius:10px;
 cursor:pointer;
`;


const Navbar = () => {
    return (
    <Container>
        <Wrapper>
            <BrowserRouter>
            <Left><Logo>
            
                Epic Marketo
              
                </Logo>
            <Menu>
               <MenuItem>
               <Link to="/" smooth>
               Home
               </Link>
               </MenuItem>
               <MenuItem>
               <Link to="#features" smooth>
               Features
               </Link>
               </MenuItem>
               <MenuItem>
               <Link to="#services" smooth>
               Services
               </Link>
               </MenuItem>
               <MenuItem>
               <Link to="#pricing" smooth>
               Pricing
               </Link>
               </MenuItem>
               <MenuItem>
               <Link to="#contact" smooth>
               Contact
               </Link>
               </MenuItem>
            </Menu>
            </Left>
            <Button>
                <Link to="#contact" smooth>
                Join Today
                </Link>
            </Button>
            </BrowserRouter>
        </Wrapper>
        </Container>
  )
}

export default Navbar

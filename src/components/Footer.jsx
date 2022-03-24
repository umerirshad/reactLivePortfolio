import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
height:26px;
background-color:#111;
color: lightgray;
padding:20px;
text-align:center;
`;
const Footer = () => {
  return (
    <Container>Copyright © 2022 Epic Marketo</Container>
  )
}

export default Footer
import styledComponents from "styled-components";
import { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";


const Container = styledComponents.div`
height:100vh;
overflow: hidden;
position: relative;
`;

const Shape = css`
width:100%;
height:100%;
left:0;
top:0;
position: absolute;
z-index:-1;
`;

const IntoShape = styledComponents.div`
${Shape}
clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
background-color: crimson;
`;

const FeatureShape = styledComponents.div`
${Shape}
clip-path: polygon(0 0, 55% 0%, 35.1% 100%, 0 100%);
background-color: pink;
`;

const ServiceShape = styledComponents.div`
${Shape}
clip-path: polygon(0 0, 35.1% 0%, 35% 100%, 0 100%);
background-color: pink;
`;

const PriceShape = styledComponents.div`
${Shape}
clip-path: polygon(35% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;


function App() {

  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <div className="App">

        <Container>
          <Navbar/>  
          
              <Intro />
              <IntoShape/>
           
       </Container>
       <Container>
           <Feature/>
           <FeatureShape/>
         
       </Container>
       <Container>
           <Service/>  
           {!smallScreen && <ServiceShape />}
        
        </Container>
       <Container>
           <Price/>
           <PriceShape/>
        
       </Container>
       <Container>
           <Contact/>
           <Footer/>
       </Container>

    </div>
  );
}

export default App;

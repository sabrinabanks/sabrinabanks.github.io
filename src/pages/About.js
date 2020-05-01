import React from "react"
import Webbox2 from './Webbox2.js';
import { ReactComponent as Bitbubble } from '../images/bitbubble.svg';
import styled, { keyframes } from "styled-components";
// import { ReactComponent as Bitsabs } from '../images/bitsabs.svg';
import { Container, Row, Col } from 'reactstrap';


function About(props) {
 
  const floating = keyframes`
0% {
  transform: translate(0, 0px);
}
65% {
  transform: translate(0, 15px);
}
0% {
    transform: translate(0, 0px);
}
//  `;

 const Styledbitbubble = styled(Bitbubble)`
 animation: ${floating} infinite 3s;
 display: inline-block;
 margin: auto;

`;

  return (
    <div id="about">
      <Webbox2 />
      <Styledbitbubble className="bitbubblefloat"/>
  </div>

  )
}
 
export default About;

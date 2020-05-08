import React from "react"
import Sabrinaresume from '../images/Sabrinaresume.png';
import Webboxresume from './Webboxresume.js';
import { ReactComponent as Bitsabs } from '../images/bitsabs.svg';
import { ReactComponent as Bitbubble } from '../images/bitbubble.svg';
import styled, { keyframes } from "styled-components";

import { Container, Row, Col } from 'reactstrap';


function Resume(props) {
 
 
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
    <div id="resume" >
      <div className="resumewrap">
       <Webboxresume />
       <Bitsabs className="bitsabs"/>
      <Styledbitbubble className="bitbubblefloat2"/>

      </div>
    </div>
  )
}
 
export default Resume;

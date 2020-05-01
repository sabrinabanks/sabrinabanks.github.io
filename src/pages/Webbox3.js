import React from "react"
import { ReactComponent as Bitmail} from '../images/bitmail.svg';
import styled, { keyframes } from "styled-components";
import { ReactComponent as Githubline } from '../images/githubline.svg';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

import {  Button, Row, 
} from 'reactstrap';


function Webbox3(props) {
  const contactinfo ={
    color: "#ff0067",
    fontSize: '3rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    marginTop:"1rem",
  }
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
   `;
  
   const Styledbitmail = styled(Bitmail)`
   animation: ${floating} infinite 3s;
   display: block;
   margin: auto;
   top:-30%;
  `;
  return (
    <div class="tribody">
      <Styledbitmail className="bitmailfloat"/>

      <div class="tribox-1">
        <div class="tribox__header"> filler
        </div>
        <div class="tribox__content">
        </div>
      </div>

      <div class="tribox-2">
        <div class="tribox__header"> filler
        </div>
        <div class="tribox__content">
        </div>
      </div>

      <div class="tribox">
        <div class="tribox__header"> 
          Let's Chat! <div class="tribox__exit" > X </div>
        </div>
        <div class="tribox__content">
          <div className="socialswrap">
          <a href="https://github.com/Batchbois/ferm-cal" className="socials">
          <Githubline />
           </a>
           {/* <a href="https://github.com/Batchbois/ferm-cal" className="socials">
          <Instagram />
           </a> */}
           <a href="https://www.linkedin.com/in/sabrinabanksr/" className="socials" >
          <Linkedin />
           </a>
           <p style={contactinfo}>
             You can Email me at 
             <br/>
             Sabrina.Randall@yahoo.com
             <br/>
             Sabrina4clouds@gamil.com
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Webbox3;

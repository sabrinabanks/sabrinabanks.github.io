import React from "react"
import styled, { keyframes } from "styled-components";
import { ReactComponent as Bitmail} from '../images/bitmail.svg';
import Webbox3 from './Webbox3.js';
import { ReactComponent as Githubline } from '../images/githubline.svg';

import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';




function Contact(props) {
  const maintitle ={
    color: "#ff0067",
    fontSize: '8rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    background: 'white',
    marginRight: '30%',
  
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
   display: inline-block;
   margin: auto;
   
  `;
  const Styledbitmail2 = styled(Bitmail)`
  animation: ${floating} infinite 4s;
  display: inline-block;
  margin: auto;
 `;
 

  return (
    
    <div id="contact">
      
      <h1 style={maintitle}>Contact</h1>
        
      <Webbox3 />
      <Styledbitmail className="bitmailfloat"/>
      <Styledbitmail2 className="bitmailfloat2"/>    
  
    </div>
    
  )
}
 
export default Contact;

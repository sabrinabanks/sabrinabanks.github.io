import React from "react"
import { ReactComponent as Sabrinajumboname } from '../images/sabrinajumboname.svg';
import { ReactComponent as Bithandicon} from '../images/bithandicon.svg';
import styled, { keyframes } from "styled-components";
import Webbox2 from './Webbox2.js';


 
function Photo(props) {
  const maintitle ={
    color: "#ff0067",
    fontSize: '8rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    background: 'white',
    
  
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

 const Styledbithandicon = styled(Bithandicon)`
 animation: ${floating} infinite 3s;
 height: 50rem;
 width: 50rem;
 display: inline-block;
 margin: auto;
`;

    return (
      <div id="photo">
      {/* <h1 style={maintitle}>Photography</h1> */}
      
      </div>
    )
  
}
 
export default Photo;
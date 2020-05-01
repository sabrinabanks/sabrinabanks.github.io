import React from "react"
import { ReactComponent as Bitname } from '../images/bitname.svg';
import { ReactComponent as Bitheart1 } from '../images/bitheart.svg';
import { ReactComponent as Bitheartwhite } from '../images/bitheartwhite.svg';
import { ReactComponent as Bitheart2 } from '../images/bitheart.svg';
import { ReactComponent as Bithandicon} from '../images/bithandicon.svg';
import styled, { keyframes } from "styled-components";


 
function Landing(props) {
 
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
 display: inline-block;
 margin: auto;
`;
const Styledbitheart1= styled(Bitheart1)`
animation: ${floating} infinite 3.5s;
display: inline-block;
margin: auto;
`;

const Styledbitheartwhite= styled(Bitheartwhite)`
animation: ${floating} infinite 3s;
display: inline-block;
margin: auto;
`;
const Styledbitheart2= styled(Bitheart2)`
animation: ${floating} infinite 2.5s;
display: inline-block;
margin: auto;
`;

    return (
      <div className="landing" id="landing">
        <div>
        <Styledbithandicon className="bithandiconfloat"/>
        </div>
        <div className="hearts" >
        <Styledbitheart1 className="styledbitheart1" />
        <Styledbitheartwhite className="styledbitheartwhite"/>
        <Styledbitheart2 className="styledbitheart2"/>
        </div>
        
        <Bitname className="bitname"/>
        
  
      </div>
    )
  
}
 
export default Landing;
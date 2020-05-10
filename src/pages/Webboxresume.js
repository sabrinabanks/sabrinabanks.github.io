import React from "react"
import Sabrinaresume from '../images/Sabrinaresume.png';

function Webboxresume(props) {
  
  return (
   
 
    <div class="bodyres">
      <div class="boxres">
        <div class="box_headerres"  > 
          Resume
          <div class="box_exitres" >
             X 
          </div>
        </div>
        <p class="box_contentres">
        <img src={Sabrinaresume} alt="Resume for Sabrina Banks" className="resumepic"/>
        </p>
    </div>
    </div>
 
    
    

  
  )
}


export default Webboxresume;
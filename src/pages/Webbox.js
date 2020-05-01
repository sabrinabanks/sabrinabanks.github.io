import React from "react"
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Javaicon } from '../images/javaicon.svg';
import { ReactComponent as Rubyicon } from '../images/rubyicon.svg';
import styled, { keyframes } from "styled-components";
import { ReactComponent as Postgresqlicon  } from '../images/postgresqlicon.svg';
import { ReactComponent as Phoenix  } from '../images/phoenix.svg';
import { ReactComponent as Ember  } from '../images/ember.svg';
import { ReactComponent as Photoshop } from '../images/photoshop.svg';
import { ReactComponent as Adobe } from '../images/adobe.svg';
import { ReactComponent as Lightroom  } from '../images/lightroom.svg';
import { ReactComponent as Experience } from '../images/experience.svg';



function Webbox(props) {

 

  return (
    <div class="boxbody">

      <div class="box-1">
        <div class="box_header"> filler
        </div>
        <div class="box_content">
        </div>
      </div>

      <div class="box-2">
        <div class="box_header"> filler
        </div>
        <div class="box_content">
        </div>
      </div>

      <div class="box">
        <div class="box_header"> 
          Skills <div class="box_exit"> X </div>
        </div>
        <div class="box_content">
             
      <div className="skillz">
        <div className="row1">
        <Logo />
        <Javaicon />
        <Rubyicon />
        </div>
        <div className="row2"> 
        <Photoshop />
        <Adobe />
        <Experience />
        <Lightroom />
        </div>
        <div className="row3">
        <Postgresqlicon />
        <Ember />
        <Phoenix />
        </div>
        
        </div>
     
        </div>
      </div>
    </div>
  )
}
 
export default Webbox;

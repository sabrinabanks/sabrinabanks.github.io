import React from "react"
import { ReactComponent as Bitfolder1 } from './bitfolder1.svg';
import { ReactComponent as Bitfolder2 } from './bitfolder1.svg';
import { ReactComponent as Bitfolder3 } from './bitfolder1.svg';

import {  Button, Row, 
 } from 'reactstrap';
 import styled, { keyframes } from "styled-components";
//  import "./custom.scss";

function Projects (props) {

  const maintitle ={
    color: "#ff0067",
    fontSize: 100,
    textAlign: "center",
    fontWeight:'semi-bold',
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

 const Styledbitfolder1 = styled(Bitfolder1)`
 animation: ${floating} infinite 3s;
 height: 50rem;
 width: 50rem;
 display: inline-block;
 margin: auto;
  `;
  const Styledbitfolder2 = styled(Bitfolder2)`
  animation: ${floating} infinite 2.5s;
  height: 50rem;
  width: 50rem;
  display: inline-block;
  margin: auto;
   `;
   const Styledbitfolder3 = styled(Bitfolder3)`
 animation: ${floating} infinite 3.5s;
 height: 50rem;
 width: 50rem;
 display: inline-block;
 margin: auto;
  `;
  return (
    <div>
      <h1 style={maintitle}>Projects</h1>
    
        <Row sm="3">
      <div>
      <Styledbitfolder1 />
      <Button className="primary" href="/fermcal">Ferm-Cal</Button>
      </div>
      <div>
      <Styledbitfolder2 />
      <Button href="/honeylistings">Honey Listings</Button>
      </div>
      <div>
      <Styledbitfolder3 />
      <Button>Dolls</Button>
      </div>
      </Row>
    </div>
  )
}
 
export default Projects;
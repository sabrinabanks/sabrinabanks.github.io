import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { ReactComponent as Bitfolder1 } from '../images/bitfolder1.svg';
import { ReactComponent as Bitfolder2 } from '../images/bitfolder1.svg';
import { ReactComponent as Bitfolder3 } from '../images/bitfolder1.svg';
import Fermcal from './Fermcal.js'; 


import {
  BrowserRouter as Router,
  Link,
  NavLink,

  Route,
  Switch
} from 'react-router-dom'

import { Row, 
 } from 'reactstrap';
 import styled, { keyframes } from "styled-components";
//  import "./custom.scss";

function Projects (props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const subtitle ={
    color: "#ff0067",
    fontSize: '5rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    background:"white",
    border: "#ff0067 2px solid",
    margin:"50px",
    
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
   display: inline-block;
   margin: auto;
   

  `;
   const Styledbitfolder2 = styled(Bitfolder2)`
   animation: ${floating} infinite 2.5s;
   display: inline-block;
   margin: auto;

  `;
  const Styledbitfolder3 = styled(Bitfolder3)`
  animation: ${floating} infinite 3s;
  display: inline-block;
  margin: auto;
  
 `;

 
  return (

    <div id="projects">

      <div>
        <Row sm="3" >
        <div>
        <a href="https://github.com/Batchbois/ferm-cal" style={{textDecoration: 'none'}}>
      <Styledbitfolder1 onClick={toggle}> {buttonLabel}</Styledbitfolder1>
          <h1 style={subtitle} data-target="#fermcal" onClick={toggle}>Ferm-cal</h1>
          </a>
      {/* <Modal id="fermcal" isOpen={modal} toggle={toggle} className={className}>

        <ModalBody>
          fermcal
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      
      <div> 
      <a href="https://github.com/sabrinabanks/Apartment-app" style={{textDecoration: 'none'}}>
      <Styledbitfolder2 onClick={toggle}> {buttonLabel}</Styledbitfolder2>
      <h1 style={subtitle} data-target="#honeylist" onClick={toggle}>Honey Listings</h1>
      </a>
      {/* <Modal isOpen={modal} id="honeylist" toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Honey Listings</ModalHeader>
        <ModalBody>
        honey
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      <div> 
      <a href="https://github.com/sabrinabanks/Doll" style={{textDecoration: 'none'}}>
      <Styledbitfolder3 onClick={toggle}> {buttonLabel}</Styledbitfolder3>
      <h1 style={subtitle}>Doll.com</h1>
      </a>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        wtf
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      {/* <Styledbitfolder3 /> */}
      </Row>
      </div>
    </div>
   
    
  )
}
 
export default Projects;
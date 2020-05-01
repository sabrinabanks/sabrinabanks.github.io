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

  const maintitle ={
    color: "#ff0067",
    fontSize: '10rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    background:'white'
  }
  const subtitle ={
    color: "#ff0067",
    fontSize: '5rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    marginTop:'2rem',
    background:'white'
   
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
      <h1 style={maintitle}>Projects</h1>
      <div>
        <Row sm="3" >
        <div>
          <h1 style={subtitle}>Ferm-cal</h1>
        <a href="https://github.com/Batchbois/ferm-cal">
      <Styledbitfolder1 onClick={toggle}> {buttonLabel}</Styledbitfolder1>
      </a>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        
        <ModalBody>
          hello
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      
      <div> 
      <h1 style={subtitle}>Honey Listings</h1>
      <a href="https://github.com/sabrinabanks/Apartment-app">
      <Styledbitfolder2 onClick={toggle}> {buttonLabel}</Styledbitfolder2>
      </a>
      {/* <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Honey Listings</ModalHeader>
        <ModalBody>
        hi 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
      <div> 
      <h1 style={subtitle}>Doll.com</h1>
      <a href="https://github.com/sabrinabanks/Doll">
      <Styledbitfolder3 onClick={toggle}> {buttonLabel}</Styledbitfolder3>
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
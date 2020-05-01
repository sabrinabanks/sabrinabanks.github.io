import React from "react"
import Sabrinaresume from '../images/Sabrinaresume.png';
import Webbox from './Webbox.js';
import { Container, Row, Col } from 'reactstrap';


function Resume(props) {
  const maintitle ={
    color: "#ff0067",
    fontSize: '8rem',
    textAlign: "center",
    fontWeight:'semi-bold',
    marginRight:'30%',
    background:'white'
    
  }
  return (
    <div id="resume">
      <h1 style={maintitle}>Resume</h1>
      <div className="resumewrap">
        <img src={Sabrinaresume} alt="Resume for Sabrina Banks" className="resumepic"/>
       <Webbox />
      </div>
    </div>
  )
}
 
export default Resume;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom'; 

// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll,
//   scrollSpy,
//   scroller
// } from "react-scroll";

import Navigation from './pages/Navigation.js'; 
import Bitnav from './pages/Bitnav.js'; 
import Projects from './pages/Projects.js'; 
import Landing from './pages/Landing.js'; 
import Resume from './pages/Resume.js'; 
import About from './pages/About.js'; 
import Contact from './pages/Contact.js'; 
import Photo from './pages/Photo.js'; 
import Fermcal from './pages/Fermcal.js'; 


// import Fermcal from './pages/Fermcal.js'; 
// import Honeylistings from './pages/Honeylistings.js'; 

function App() {
  return (

    <div className="App">
       <Navigation />
       {/* <Bitnav /> */}
       <Landing />
       <About />
       <Projects />
       <Resume />
       <Contact />
       <Photo />
    </div>
  
  );
}

export default App;

import React from "react"
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

function Navigation(props) {
  return (
    <div className="Navigation">

    {/* <Navbar className="Navbar"  expand="md">
      <NavbarBrand href="/" className="Navbrand">Home</NavbarBrand>
        <Nav className="ml-auto" navbar> */}

        <nav className="navbar fixed-top" >
          <div className="container-fluid ">
              <ul className="nav ml-auto ">

          <li class="nav-item">
          <Link
          activeClass="active"
          to="landing"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={500}>Home
          </Link>
          </li>

          <li>
            <Link activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-100}
      duration={500}>About</Link>
          </li>

      <li>
            <Link activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-60}
      duration={500}>Projects</Link>
          </li>
          <li>
            <Link activeClass="active"
      to="resume"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-100}
      duration={500}>Resume</Link>
          </li>

          <li>
            <Link activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-60}
      duration={500}>Contact</Link>
          </li>

          {/* <li>
            <Link activeClass="active"
      to="photo"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-100}
      duration={500}>Photography</Link>
          </li> */}
              </ul>
            
          </div>
        </nav>

          {/* <NavLink href="/projects" className="Navlink">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/resume" className="Navlink">Resume</NavLink>
        </NavItem> */}
{/* 
          <NavItem>
            <NavLink href="/contact" className="Navlink">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/sabrinabanks" className="Navlink">GitHub</NavLink>
          </NavItem> */}
{/* 
        </Nav>
    </Navbar> */}
  </div>
  )
}
 
export default Navigation;
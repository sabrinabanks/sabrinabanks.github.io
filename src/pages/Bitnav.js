import React from "react"

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

function Bitnav(props) {
  return (
    <div className="Navigation">
        <nav className="navbar fixed-bottom" >
          <div className="container-fluid justify-content-center ">
              <ul className="nav ">

          <li class="nav-item ">
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
        </ul>
      </div>
    </nav>
  </div>
  )
}
 
export default Bitnav;
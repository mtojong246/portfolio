import './all.styles.scss';
import Nav from '../NavBar/nav.component';
import Home from '../Home/home.component';
import About from '../About/about.component';
import Toolkit from '../Toolkit/toolkit.component';
import ProjectOne from '../Project-One/project-one.component';
import ProjectTwo from '../Project-Two/project-two.component';
import ProjectThree from '../Project-Three/project-three.component';
import Contact from '../Contact/contact.component';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

const All = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);

    return (
    <>
      <div className='overlay'></div>
      <>
        <div className='nav-bar-container'>
          <div className='logo'>
            <span><Link to="home" spy={true} offset={-380} smooth={true} duration={2000} delay={100}>MT.</Link></span>
          </div>
          <Nav />
        </div>
        <div className='center'>
          <Home />
        </div>
        <div className='center long'>
          <About />
        </div>
        <div className='center short'>
          <Toolkit />
        </div>
        <div className='center'>
          <ProjectOne />
        </div>
        <div className='center'>
          <ProjectTwo />
        </div>
        <div className='center'>
          <ProjectThree />
        </div>
        <div className='center short'>
          <Contact />
        </div>
      </>
    </>
    )
}

export default All;
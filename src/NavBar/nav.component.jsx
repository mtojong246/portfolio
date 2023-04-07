import './nav.styles.scss';
import { Link } from 'react-scroll';

console.log(window.innerHeight);


const Nav = () => {
    return (
        <div className='nav-bar-options'>
            <span><Link to="about" spy={true} offset={-0.2*(window.innerHeight)} smooth={true} duration={2000} delay={100}>About</Link></span>
            <span><Link to="projects" spy={true} offset={-0.09*(window.innerHeight)} smooth={true} duration={2000} delay={100}>Projects</Link></span>
            <span><Link to="contact" spy={true} offset={-0.2*(window.innerHeight)} smooth={true} duration={2000} delay={100}>Contact</Link></span>
        </div>
    )
}

export default Nav;
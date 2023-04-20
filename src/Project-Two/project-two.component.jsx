import './project-two.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Primordial from '../Screenshots/primordial_title_screen.svg';
import PrimordialPage from '../Screenshots/primordial_screenshot.svg';


const ProjectTwo = () => {
    return (
        <div className='project-two-container'>
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <div className='project-two-image-container'>
                    <img src={Primordial} alt='primordial' className='project-two-image'/>
                    <img className='project-two-screenshot' src={PrimordialPage} alt='primordial-main' />
                    <div className='overlay-two'>
                        <button>Learn More</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeft' className='animated-right'>
                <div className='project-two-description-container'>
                    <span>Primordial <a href={'https://github.com/mtojong246/primordial.git'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><a href={'https://fascinating-pavlova-aa2ae2.netlify.app/'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='web-link'/></a></span>
                    <div className='project-two-description'>
                        <p>A simple point-and-click game, inspired by the popular mobile game "Little Alchemy 2".</p>
                        <hr />
                        <span>#React #Sass</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectTwo;
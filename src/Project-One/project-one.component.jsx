import './project-one.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import KnifePurveyor from '../Screenshots/knife_purveyor_screenshot.svg';
import KnifePurveyorPage from '../Screenshots/knife_purveyor_shop.svg';


const ProjectOne = () => {
    return (
        <div className='project-one-container' id="projects">
            <AnimationOnScroll animateIn='animate__fadeInLeft' >
                <div className='project-one-title'>
                    <span>Projects</span>
                    <hr />
                </div>
                <div className='project-one-image-container'>
                    <img src={KnifePurveyor} alt='knife-purveyor' className='project-one-image' />
                    <img className='project-one-screenshot' src={KnifePurveyorPage} alt='knife-purveyor-main' />
                    <div className='overlay-one'>
                        <button>Learn More</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left'>
                <div className='project-one-description-container'>
                    <span>Knife Purveyor <a href={'https://github.com/mtojong246/knife-purveyor.git'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><a href={'https://endearing-meringue-a41e20.netlify.app/'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='web-link'/></a></span>
                    <div className='project-one-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices gravida dictum fusce ut placerat orci.</p>
                        <hr />
                        <span>skills</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectOne;
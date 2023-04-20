import './project-three.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Pantry from '../Screenshots/pantry_title_screen.svg';
import PantryPage from '../Screenshots/pantry_screenshot.svg';


const ProjectThree = () => {
    return (
        <div className='project-three-container'>
            <AnimationOnScroll animateIn='animate__fadeInLeft'>
                <div className='project-three-image-container'>
                    <img className='project-three-image' src={Pantry} alt='pantry'/>
                    <img className='project-three-screenshot' src={PantryPage} alt='pantry-main' />
                    <div className='overlay-three'>
                        <button>Learn More</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left'>
                <div className='project-three-description-container'>
                    <span>Pantry <a href={'https://github.com/mtojong246/pantry-app.git'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><a href={'https://mtojong246.github.io/pantry-app/'} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='web-link'/></a></span>
                    <div className='project-three-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices gravida dictum fusce ut placerat orci.</p>
                        <hr />
                        <span>skills</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectThree;
import './project-three.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Primordial from '../Screenshots/primordial_title_screen.svg';
import PrimordialPage from '../Screenshots/primordial_screenshot.svg';
import { Link } from 'react-router-dom';


const ProjectThree = () => {
    return (
        <div className='project-three-container'>
            <AnimationOnScroll animateIn='animate__fadeInLeft'>
                <div className='project-three-image-container'>
                    <img className='project-three-image' src={Primordial} alt='primordial'/>
                    <img className='project-three-screenshot' src={PrimordialPage} alt='primordial-main' />
                    <div className='overlay-three'>
                        <Link to='/primordial'><button>Learn More</button></Link>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left'>
                <div className='project-three-description-container'>
                    <span>Primordial <FontAwesomeIcon icon={faFlask} /></span>
                    <div className='project-three-description'>
                        <p>A simple point-and-click game, inspired by the popular mobile app "Little Alchemy 2".</p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/primordial.git'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://fascinating-pavlova-aa2ae2.netlify.app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Sass</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectThree;
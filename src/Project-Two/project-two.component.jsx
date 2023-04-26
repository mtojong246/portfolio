import './project-two.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Pantry from '../Screenshots/pantry_title_screen.svg';
import PantryPage from '../Screenshots/pantry_screenshot.svg';
import { Link } from 'react-router-dom';
import Mobile1 from '../Screenshots/pantry_mobile.svg';


const ProjectTwo = () => {
    return (
        <div className='project-two-container'>
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <div className='project-two-image-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}>Pantry <FontAwesomeIcon icon={faDrumstickBite} /></span>
                    <img src={`${window.innerWidth > 480 ? Pantry : Mobile1}`} alt='pantry' className='project-two-image'/>
                    <img className='project-two-screenshot' src={PantryPage} alt='pantry-main' />
                    <div className='overlay-two'>
                        <Link to='/pantry'><button>Learn More</button></Link>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeft' className='animated-right'>
                <div className='project-two-description-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}>Pantry <FontAwesomeIcon icon={faDrumstickBite} /></span>
                    <div className='project-two-description'>
                        <p>A full-stack website that generates recipes based on items in your pantry. Includes a customizable nutrition tracker, food log and grocery list. </p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/pantry-app.git'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://mtojong246.github.io/pantry-app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Sass #Node #PostgreSQL</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectTwo;
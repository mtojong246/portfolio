import './project-one.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import KnifePurveyor from '../Screenshots/knife_purveyor_screenshot.svg';
import KnifePurveyorPage from '../Screenshots/knife_purveyor_shop.svg';
import { Link } from 'react-router-dom';
import Knife from '../Screenshots/knife-fill-svgrepo-com.svg';


const ProjectOne = () => {
    return (
        <div className='project-one-container' id="projects">
            <AnimationOnScroll animateIn='animate__fadeInLeft' >
                <div className='project-one-title'>
                    <span>My Projects <FontAwesomeIcon icon={faLayerGroup} /></span>
                    <hr />
                </div>
                <div className='project-one-image-container'>
                    <img src={KnifePurveyor} alt='knife-purveyor' className='project-one-image' />
                    <img className='project-one-screenshot' src={KnifePurveyorPage} alt='knife-purveyor-main' />
                    <div className='overlay-one'>
                        <Link to='/knife-purveyor'><button>Learn More</button></Link>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left'>
                <div className='project-one-description-container'>
                    <span>Knife Purveyor <img src={Knife} alt='knife' /></span>
                    <div className='project-one-description'>
                        <p>An e-commerce website re-designed for a local knife shop located in Wake Forest, NC.</p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/knife-purveyor.git'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://endearing-meringue-a41e20.netlify.app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Sass #Firebase #Stripe #GoogleMapAPI</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectOne;
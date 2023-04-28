import './project-one.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import KnifePurveyor from '../Screenshots/knife_purveyor_screenshot.png';
import KnifePurveyorPage from '../Screenshots/knife_purveyor_shop.png';
import Mobile1 from '../Screenshots/purveyor_mobile_main.png';
import Mobile2 from '../Screenshots/purveyor_mobile_shop.png';
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
                    <span style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}>Knife Purveyor <img src={Knife} id='knife' alt='knife' style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}/></span>
                    <img src={`${window.innerWidth > 480 ? KnifePurveyor : Mobile1}`} alt='knife-purveyor' className='project-one-image' />
                    <img className='project-one-screenshot' src={`${window.innerWidth > 480 ? KnifePurveyorPage : Mobile2}`} alt='knife-purveyor-main' />
                    <div className='overlay-one'>
                        <Link to='/knife-purveyor'><button>Learn More</button></Link>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left'>
                <div className='project-one-description-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}>Knife Purveyor <img src={Knife} alt='knife' style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}/></span>
                    <div className='project-one-description'>
                        <p>An e-commerce website re-designed for a local knife shop located in Wake Forest, NC.</p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/knife-purveyor.git'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://knife-purveyor.netlify.app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Firebase #Stripe #GoogleMapAPI</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default ProjectOne;
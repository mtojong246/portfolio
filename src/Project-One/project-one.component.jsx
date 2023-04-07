import './project-one.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const ProjectOne = () => {
    return (
        <div className='project-one-container' id="projects">
            <AnimationOnScroll animateIn='animate__fadeInLeft'>
                <div className='project-one-title'>
                    <span>Projects</span>
                    <hr />
                </div>
                <div className='project-one-image'></div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight'>
                <div className='project-one-description-container'>
                    <span>Title <a href={''}><FontAwesomeIcon icon={faGithub} /></a></span>
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
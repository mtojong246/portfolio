import './project-three.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Primordial from '../Screenshots/primordial_main.png';
import Mobile1 from '../Screenshots/primordial_mobile_main.png';
import { useState } from 'react';
import PrimordialModal from '../Primordial-Modal/primordial-modal.component';


const ProjectThree = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
        <div className='project-three-container'>
            <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
                <div className='project-three-image-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}>Primordial <FontAwesomeIcon icon={faFlask} /></span>
                    <img className='project-three-image' src={`${window.innerWidth > 480 ? Primordial : Mobile1}`} alt='primordial'/>
                    <div className='overlay-three'>
                        <button onClick={toggleModal}>View Demo</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='animated-left' animateOnce='true'>
                <div className='project-three-description-container'>
                    <div className='description-title'><span style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}>Primordial <FontAwesomeIcon icon={faFlask} /></span></div>
                    <div className='project-three-description'>
                        <p>A simple point-and-click game, inspired by the popular mobile app "Little Alchemy 2".</p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/primordial.git'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://primordial-game.netlify.app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Sass</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
        <PrimordialModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>
        </>
    )
}

export default ProjectThree;
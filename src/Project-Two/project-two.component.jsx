import './project-two.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Pantry from '../Screenshots/pantry_main.png';
import Mobile1 from '../Screenshots/pantry_mobile_main.png';
import PantryModal from '../Pantry-Modal/pantry-modal.component';
import { useState } from 'react';


const ProjectTwo = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className='project-two-container'>
            <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
                <div className='project-two-image-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}>Pantry <FontAwesomeIcon icon={faDrumstickBite} /></span>
                    <img src={`${window.innerWidth > 480 ? Pantry : Mobile1}`} alt='pantry' className='project-two-image'/>
                    <div className='overlay-two'>
                        <button onClick={toggleModal}>View Demo</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce='true'>
                <div className='project-two-description-container'>
                    <div className='description-title'><span style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}>Pantry <FontAwesomeIcon icon={faDrumstickBite} /></span></div>
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
            <PantryModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>
        </div>
    )
}

export default ProjectTwo;
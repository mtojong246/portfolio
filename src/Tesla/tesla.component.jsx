import './tesla.styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import TeslaDesktop from '../Screenshots/tesla-screenshot.png';
import TeslaMobile from '../Screenshots/tesla-mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TeslaModal from '../Tesla-Modal/tesla-modal.component';

const Tesla = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
        <div className='tesla-container'>
            <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
                <div className='tesla-image-container'>
                    <span style={{ display: `${window.innerWidth > 480 ? 'none' : 'inline-block'}`}}>Tesla Clone <FontAwesomeIcon icon={faCarSide} /></span>
                    <img src={`${window.innerWidth > 480 ? TeslaDesktop : TeslaMobile}`} alt='tesla' className='tesla-image'/>
                    <div className='overlay-two'>
                        <button onClick={toggleModal}>View Demo</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce='true'>
                <div className='tesla-description-container'>
                    <div className='description-title'><span style={{ display: `${window.innerWidth > 480 ? 'inline-block' : 'none'}`}}>Tesla Clone <FontAwesomeIcon icon={faCarSide} /></span></div>
                    <div className='tesla-description'>
                        <p>A landing page inspired by the tesla website.</p>
                        <div className='button-link-container'>
                            <a href={'https://github.com/mtojong246/tesla'} target="_blank" rel="noopener noreferrer"><button>Source Code</button></a>
                            <a href={'https://mt-tesla-clone.netlify.app/'} target="_blank" rel="noopener noreferrer"><button>Website Link</button></a>
                        </div>
                        <hr />
                        <span>#React #Sass</span>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
        <TeslaModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>
        </>
    )
}

export default Tesla;
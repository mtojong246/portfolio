import './toolkit.styles.scss';
import { tools } from '../Data/data';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Toolkit = () => {
    return (
        <div className='toolkit-container'> 
            <div className='toolkit-title'>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <span>My Toolkit <FontAwesomeIcon icon={faScrewdriverWrench} /></span>
                    <hr />
                </AnimationOnScroll>
            </div>
            <div className='toolkit'>
            {tools.map(tool => (
                <AnimationOnScroll animateIn='animate__fadeInLeft' className='tool-animation'>
                    <div className='tool-label'>
                        <span>{tool.label}</span>
                    </div>
                    <img src={tool.image} alt={`${tool.label}`} />
                </AnimationOnScroll>
            ))}
            </div>
        </div>
    )
}

export default Toolkit;
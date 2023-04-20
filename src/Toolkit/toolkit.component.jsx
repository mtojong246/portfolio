import './toolkit.styles.scss';
import { tools } from '../Data/data';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Toolkit = () => {
    return (
        <div className='toolkit-container'> 
            <div className='toolkit-title'>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <span>Toolkit</span>
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
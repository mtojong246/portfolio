import './about.styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Headshot from '../Screenshots/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className='about-container' id='about'>
                <AnimationOnScroll animateIn='animate__fadeInDown' className='animate-about-title'>
                    <div className='about-title'>
                        <span>My Journey (So Far) <FontAwesomeIcon icon={faPersonHiking} /></span>
                        <hr />
                    </div>
                    <div></div>
                    <div className='about-description'>
                        <p>With the desire to help others by developing creative solutions to complex problems, I initially went down the path of scientific research and medicine. This desire, however, later informed my decision to pursue web development as a means of implementing real change in a rapidly-evolving world.</p>
                        <p>Since beginning my journey in 2022, I have enjoyed building interactive applications that reflect my personal perspective while challenging my ability to solve problems efficiently and creatively. To this day, I remain steadfast in my goal of helping others by improving their quality of life and empowering their sense of autonomy in an ever-changing environment.</p>
                    </div>
                </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <img src={Headshot} alt='headshot' className='about-image' />
            </AnimationOnScroll>
        </div>
    )
}

export default About;
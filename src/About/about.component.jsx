import './about.styles.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Headshot from '../Screenshots/headshot.jpg';


const About = () => {
    return (
        <div className='about-container' id='about'>
                <AnimationOnScroll animateIn='animate__fadeInDown' className='animate-about-title'>
                    <div className='about-title'>
                        <span>About Me</span>
                        <hr />
                    </div>
                    <div></div>
                    <div className='about-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices gravida dictum fusce ut placerat orci.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Ultrices gravida dictum fusce ut placerat orci. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. </p>
                    </div>
                </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
                <img src={Headshot} alt='headshot' className='about-image' />
            </AnimationOnScroll>
        </div>
    )
}

export default About;
import './toolkit.styles.scss';
import Html from '../Icons/html5.svg';
import Css from '../Icons/css3.svg';
import Js from '../Icons/javascript.svg';
import ReactJs from '../Icons/react.svg';
import Node from '../Icons/nodedotjs.svg';
import Sql from '../Icons/postgresql.svg';
import Firebase from '../Icons/firebase.svg';
import Figma from '../Icons/figma.svg';
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
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Html} alt='html5' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Css} alt='css3' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Js} alt='javascript' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={ReactJs} alt='react' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Node} alt='node' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Sql} alt='postgresql' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Firebase} alt='firebase' /></AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'><img src={Figma} alt='figma' /></AnimationOnScroll>
            </div>
        </div>
    )
}

export default Toolkit;
import './contact.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Contact = () => {
    return (
        <>
            <div className='contact-container' id="contact">
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='contact-title'>
                        <span>My Contact <FontAwesomeIcon icon={faPaperPlane} /></span>
                        <hr />
                    </div>
                    <p className='phone-number'>(919)-665-9606</p>
                    <p className='email'>mtojong@gmail.com</p>
                </AnimationOnScroll>
                <div className='social-media'>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'><a href={''}><FontAwesomeIcon icon={faLinkedin} /></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'><a href={''}><FontAwesomeIcon icon={faGithub} /></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'><a href={''}><FontAwesomeIcon icon={faGoogle} /></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'><a href={''}><FontAwesomeIcon icon={faFacebook} /></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft'><a href={''}><FontAwesomeIcon icon={faInstagram} /></a></AnimationOnScroll>
                </div>
            </div>
            <div className='footer'>
              <p>designed & built</p>
              <p>by melanie</p>
            </div>
        </>
    )
}

export default Contact;
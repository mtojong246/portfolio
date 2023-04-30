import './contact.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Contact = () => {
    return (
        <>
            <div className='contact-container' id="contact">
                <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'>
                    <div className='contact-title'>
                        <span>My Contact <FontAwesomeIcon icon={faPaperPlane} /></span>
                        <hr />
                    </div>
                    <p className='phone-number'>(919)-665-9606</p>
                    <p className='email'>mtojong@gmail.com</p>
                </AnimationOnScroll>
                <div className='social-media'>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'><a href='https://www.linkedin.com/in/melanie-tojong-4b5149158/' target="_blank" rel="noopener noreferrer"><button>LinkedIn</button></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'><a href='https://github.com/mtojong246' target="_blank" rel="noopener noreferrer"><button>Github</button></a></AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce='true'><a href='mailto:mtojong@gmail.com'><button>Gmail</button></a></AnimationOnScroll>
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
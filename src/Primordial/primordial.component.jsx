import './primordial.styles.scss';
import { Link } from 'react-router-dom';
import ImgOne from '../Screenshots/primordial_screenshot.svg';
import ImgTwo from '../Screenshots/primordial_screenshot2.svg';
import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';


const Primordial = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    
    return (
        <div className='overlay-page'>
            <div className='primordial-content'>
                <div className='primordial-nav'>
                    <div className='primordial-logo' onClick={scrollToTop}>
                        <span>MT.</span>
                    </div>
                    <div className='return-three'>
                        <Link to='/'><button>{'< Return'}</button></Link>
                    </div>
                </div>
                <div className='primordial-blog-title animate__animated animate__fadeInDown'>
                    <span>Primordial <FontAwesomeIcon icon={faFlask} /></span>
                </div>
                <div className='primordial-blog-subtitle animate__animated animate__fadeInDown'>
                    <p>A simple point-and-click game, inspired by the popular mobile app "Little Alchemy 2".</p>
                </div>
                <div className='primordial-screenshots animate__animated animate__fadeInUp'>
                    <div className='primordial-image-container'>
                        <img src={ImgOne} alt='primordial-screenshot-one' />
                    </div>
                    <div className='caption'>
                        <p>Main Page</p>
                    </div>
                </div>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='primordial-paragraphs'>
                        <p><a href={'https://fascinating-pavlova-aa2ae2.netlify.app/'} target="_blank" rel="noopener noreferrer">Primordial</a> was a fun and exciting project to create. In addition, it allowed me to practice utilizing React class components while also challenging myself to implement new ways that users can interact with my websites.</p>
                        <p>The game begins with four starting elements, which the player can grab from the “storage” field and place onto the “play” field. From there, the player can combine two elements together, and each successful combination creates a new element that becomes subsequently added to the player’s storage and encyclopedia. I also implemented certain features that are seen in the original mobile app, including options to clean up the play field and reset a player’s progress.</p>
                        <p>To manipulate the icons throughout the screen, I first utilized the HTML Drag and Drop API. This tool made the process very straightforward, using simple React event handlers to move icons across separate components and clone icons before they were translated from the storage field. However, the API achieved all of this by storing the DOM element’s data, resulting in “ghost” icons that moved with the cursor, rather than the element itself. To solve this issue, I abandoned the API altogether in favor of another method using <a href={'https://github.com/mtojong246/primordial/blob/master/src/IconStorage/iconStorage.component.jsx'} target="_blank" rel="noopener noreferrer">pointer event listeners</a> <span>(Lines 31-179)</span>.</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <div className='primordial-screenshots'>
                        <div className='primordial-image-container'>
                            <img src={ImgTwo} alt='primordial-screenshot-two' />
                        </div>
                        <div className='caption'>
                            <p>Encyclopedia</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='primordial-paragraphs'>
                        <p>Drawing inspiration from <a href='https://javascript.info/mouse-drag-and-drop' target="_blank" rel="noopener noreferrer">this blog post</a>, I created a larger “pointer down” event listener, which included all of the logic pertaining to a single drag and drop event. This not only mitigated the visual drawbacks of the Drag and Drop API, but it also allowed for added functionality during the “pointer move” events, such as increasing an icon’s size when another icon was hovered over it. This, however, also came with its own drawbacks. For one, this method relied on manipulating the DOM directly rather than taking advantage of React’s virtual DOM. Also, by placing the event listener outside of a React class component, it was impossible to manage state across components without relying on global variables.</p>
                        <p>But despite this, I am happy that I managed to create an application that appears and functions similarly to the original. This project very much highlighted to me the power of Javascript to create just about anything, and I am excited to see the more complex and creative projects I can build in the future.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Primordial;
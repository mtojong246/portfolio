import './primordial.styles.scss';
import { Link } from 'react-router-dom';
import ImgOne from '../Screenshots/primordial_screenshot.svg';
import ImgTwo from '../Screenshots/primordial_screenshot2.svg';
import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animateScroll as scroll } from 'react-scroll';


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
                <div className='primordial-screenshots animate__animated animate__fadeInDown' style={{marginTop: '8vw'}}>
                    <div className='primordial-image-container'>
                        <img src={ImgOne} alt='primordial-screenshot-one' />
                    </div>
                    <div className='caption'>
                        <p>1. Main Page</p>
                    </div>
                </div>
                <div className='primordial-paragraphs animate__animated animate__fadeInLeft'>
                    <p><a href={'https://fascinating-pavlova-aa2ae2.netlify.app/'} target="_blank" rel="noopener noreferrer">Primordial</a> is a point-and-click game that aims to mimic the popular mobile application “Little Alchemy 2”. I took on this project as a way to practice utilizing React class components while also challenging myself to implement new ways that users can interact with my websites.</p>
                    <p>The game begins with four starting elements, which the player can grab from the “storage” field and place onto the “play” field. From there, the player can combine two elements together, and each successful combination creates a new element that becomes subsequently added to the player’s storage and encyclopedia. I also implemented certain features that are seen in the original mobile app, including options to clean up the play field and reset a player’s progress.</p>
                    <p>To manipulate the icons throughout the screen, I first utilized the HTML Drag and Drop API. This tool made the process very straightforward, using simple React event handlers to move icons across separate components and clone icons before they were translated from the storage field. However, the API achieved all of this by storing the DOM element’s data, resulting in “ghost” icons that moved with the cursor, rather than the element itself. To solve this issue, I abandoned the API altogether in favor of <a href='https://carbon.now.sh/y2rYV9IQAm1882doasaJ' target="_blank" rel="noopener noreferrer">another method</a> using pointer event listeners.</p>
                </div>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='primordial-screenshots'>
                        <div className='primordial-image-container'>
                            <img src={ImgTwo} alt='primordial-screenshot-two' />
                        </div>
                        <div className='caption'>
                            <p>2. Encyclopedia</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <div className='primordial-paragraphs animate__animated animate__flipInX'>
                        <p>Drawing inspiration from <a href='https://javascript.info/mouse-drag-and-drop' target="_blank" rel="noopener noreferrer">this blog post</a>, I created a larger “pointer down” event listener, which included all of the logic pertaining to a single drag and drop event. This not only mitigated the visual drawbacks of the Drag and Drop API, but it also allowed for added functionality during the “pointer move” events, such as increasing an icon’s size when another icon was hovered over it. This, however, also came with its own drawbacks. For one, this method relied on manipulating the DOM directly rather than taking advantage of React’s virtual DOM. Also, by placing the event listener outside of a React class component, it was impossible to manage state across components without relying on global variables.</p>
                        <p>But despite this, I am happy that I managed to create an application that appears and functions similarly to the original. This project very much highlighted to me the power of Javascript to create just about anything, and I am excited to see the more complex and creative projects I can build in the future.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default Primordial;
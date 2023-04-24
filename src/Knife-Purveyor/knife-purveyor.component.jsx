import './knife-purveyor.styles.scss';
import { Link } from 'react-router-dom';
import ImgOne from '../Screenshots/knife_purveyor_shop.svg';
import ImgTwo from '../Screenshots/knife_purveyor_contact.svg';
import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animateScroll as scroll } from 'react-scroll';

const KnifePurveyor = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <div className='overlay-page'>
            <div className='purveyor-content'>
                <div className='purveyor-nav'>
                    <div className='purveyor-logo' onClick={scrollToTop}>
                        <span>MT.</span>
                    </div>
                    <div className='return-one'>
                        <Link to='/'><button>{'< Return'}</button></Link>
                    </div>
                </div>
                <div className='purveyor-screenshots animate__animated animate__fadeInDown' style={{marginTop: '8vw'}}>
                    <div className='purveyor-image-container'>
                        <img src={ImgOne} alt='shop-page' />
                    </div>
                    <div className='purveyor-image-caption'>
                        <p className='caption'>1. Shop Page</p>
                    </div>
                </div>
                <div className='purveyor-paragraphs animate__animated animate__fadeInLeft'>
                    <p>Knife Purveyor is an e-commerce website that I re-designed for a local knife shop. In addition to helping improve the site for a small business, I also took this project as an opportunity to practice utilizing React hooks for managing state and working with serverless providers such as Firebase and Stripe.</p>
                    <p>Although I preserved much of the original design layout, I added certain features that, I believed, would improve the online shopper’s experience. For example, I made the navigation bar much thinner than the original, adding a dropdown menu to display the knive categories, as well as a “scroll to top” button at the bottom-right corner of every page. I also used the Google Map API to display the location of their business on the contact page, as well as Firebase to add a Google Sign-In option. Finally, I added another dropdown menu below the cart icon so shoppers could see and edit the items in their cart. </p>
                    <p>As my first big project since beginning my web developer journey, I faced many challenges along the way, specifically with state management. For example, when navigating to each knife category from the homepage, the page would load the corresponding shop items as expected. After re-loading the page, however, an error would indicate that my API data became undefined. The same thing would occur when trying to filter items by price, knife-maker, etc.</p>
                </div>
                <AnimationOnScroll animateIn='animate__fadeInLeft'>
                    <div className='purveyor-screenshots animate__animated animate__fadeInRight'>
                        <div className='purveyor-image-container'>
                            <img src={ImgTwo} alt='contact-page' />
                        </div>
                        <div className='purveyor-image-caption'>
                            <p className='caption'>2. Contact Page</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight'>
                    <div className='purveyor-paragraphs'>
                        <p>After hours of banging my head against the wall, I eventually realized that the API data was becoming undefined because since every state change triggered a re-render, the site had to re-fetch the data each time. Since this process is asynchronous, the page loads the DOM before the data is available, causing the component to read the state variable as undefined. To fix this, I added a condition that would delay the rendering process until the data had successfully loaded.</p>
                        <p>Overcoming this issue made me realize the importance of considering every step of the rendering process when working with API data, as well as the utility of asynchronous functions to accomplish certain tasks. In fact, I believe that working on this project gave me a much better grasp of using and handling asynchronous functions, a concept that I initially had difficulty wrapping my head around.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default KnifePurveyor;
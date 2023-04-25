import './knife-purveyor.styles.scss';
import { Link } from 'react-router-dom';
import ImgOne from '../Screenshots/knife_purveyor_shop.svg';
import ImgTwo from '../Screenshots/knife_purveyor_contact.svg';
import { useEffect } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Knife from '../Screenshots/knife-fill-svgrepo-com.svg';

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
                <div className='purveyor-blog-title animate__animated animate__fadeInDown'>
                    <span>Knife Purveyor <img src={Knife} alt='knife' /></span>
                </div>
                <div className='purveyor-blog-subtitle animate__animated animate__fadeInDown'>
                    <p>An e-commerce website re-designed for a local knife shop located in Wake Forest, NC.</p>
                </div>
                <div className='purveyor-screenshots animate__animated animate__fadeInUp'>
                    <div className='purveyor-image-container'>
                        <img src={ImgOne} alt='shop-page' />
                    </div>
                    <div className='purveyor-image-caption'>
                        <p className='caption'>Shop Page</p>
                    </div>
                </div>
                <AnimationOnScroll animateIn='animate__fadeInLeft' duration={1.5}>
                    <div className='purveyor-paragraphs'>
                        <p><a href={'https://endearing-meringue-a41e20.netlify.app/'} target="_blank" rel="noopener noreferrer">Knife Purveyor</a> was built as an opportunity to help improve a website for a small business while practicing my skills in utilizing React hooks for managing state and working with serverless providers such as Firebase and Stripe.</p>
                        <p>Although I preserved much of the <a href='https://www.knifepurveyor.com/' target="_blank" rel="noopener noreferrer">original</a> design layout, I added certain features that, I believed, would improve the online shopper’s experience. For example, I made the navigation bar much thinner than the original's, adding a dropdown menu to display the knive categories, as well as a “scroll to top” button at the bottom-right corner of every page. I also used the Google Map API to display the location of their business on the contact page, as well as Firebase to add a Google Sign-In option. Finally, I added another dropdown menu below the cart icon so shoppers could see and edit the items in their cart. </p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInRight' duration={1.5}>
                    <div className='purveyor-screenshots'>
                        <div className='purveyor-image-container'>
                            <img src={ImgTwo} alt='contact-page' />
                        </div>
                        <div className='purveyor-image-caption'>
                            <p className='caption'>Contact Page</p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInLeft' duration={1.5}>
                    <div className='purveyor-paragraphs'>
                        <p>As my first big project since beginning my web developer journey, I faced many challenges along the way. For example, when navigating to each knife category from the homepage, the corresponding shop items would load as expected. After re-loading the page, however, an error would indicate that my API data had become undefined. The same thing would occur when trying to filter items by price, knife-maker, etc.</p>
                        <p>But after hours of (metaphorically) banging my head against the wall, I eventually understood the reason behind this error. Every state change in a React app triggers a re-render, thereby causing the website to re-fetch the API data. Since this process is asynchronous, the page loads the DOM before the data is available. To fix this, I added a condition that would display a loading spinner until the data had successfully loaded.</p>
                        <p>Overcoming this issue made me realize the importance of considering every step of the rendering process when working with API data, as well as the importance of deliberately practicing how to read and debug code.</p>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default KnifePurveyor;
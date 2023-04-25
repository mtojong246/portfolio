import './home.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <div className='home-container' id="home">
                <div className='home-title-container'>
                    <p className='home-title animate__animated animate__fadeInLeft' >Hi, my</p>
                    <p className='home-title animate__animated animate__fadeInLeft'>name is Melanie.</p>
                </div>
                <p className='home-description animate__animated animate__flipInX'>I'm a front end web developer with a strong passion for <span>discovery</span> and <span>innovation</span>.</p>
                <button className='animate__animated animate__flipInX'>resume</button>
            </div>
            <div className='scroll-arrow animate__animated animate__shakeY'>
                <p>scroll for details</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </>
    )
}

export default Home;
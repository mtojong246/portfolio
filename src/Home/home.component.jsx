import './home.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <div className='home-container' id="home">
                <div className='home-title-container'>
                    <p className='home-title animate__animated animate__fadeInLeft' >Hello, my name is Melanie.</p>
                </div>
                <p className='home-description animate__animated animate__flipInX'>I'm a front end web developer with a strong passion for <span>discovery</span> and <span>innovation</span>.</p>
                <a href='https://docs.google.com/document/d/1U6BWD7-W_cP7fa1Cf-9huOf2AgqC-afd570T14RBJyU/edit?usp=sharing' target="_blank" rel="noopener noreferrer"><button className='animate__animated animate__flipInX'>resume</button></a>
            </div>
            <div className='scroll-arrow animate__animated animate__shakeY'>
                <p>scroll for details</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </>
    )
}

export default Home;
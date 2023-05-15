import './tesla-modal.styles.scss';
import TeslaDemo from '../Screenshots/Tesla-Demo.mp4';

const TeslaModal = ({ isModalOpen, toggleModal }) => {
    return (
        <>
        {isModalOpen && (
            <div className='tesla-modal-container'>
                <div className='tesla-modal-overlay' onClick={toggleModal}></div>
                <div className='tesla-modal-content popup'>
                    <video controls muted playsInline>
                            <source src={TeslaDemo} type="video/mp4" />
                    </video>
                </div>
            </div>
        )}
        </>
    )
}

export default TeslaModal;
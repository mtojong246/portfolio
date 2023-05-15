import './primordial-modal.styles.scss';
import PrimordialDemo from '../Screenshots/Primordial-Demo.mp4';

const PrimordialModal = ({ toggleModal, isModalOpen }) => {
    return (
        <>
        {isModalOpen && (
            <div className='primordial-modal-container'>
                <div className='primordial-modal-overlay' onClick={toggleModal}></div>
                <div className='primordial-modal-content popup'>
                    <video controls muted playsInline>
                            <source src={PrimordialDemo} type="video/mp4" />
                    </video>
                </div>
            </div>
        )}
        </>
    )
}

export default PrimordialModal;
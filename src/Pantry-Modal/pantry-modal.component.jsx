import './pantry-modal.styles.scss';
import PantryDemo from '../Screenshots/Pantry-Demo.mp4';

const PantryModal = ({ isModalOpen, toggleModal }) => {
    return (
        <>
        {isModalOpen && (
            <div className='pantry-modal-container'>
                <div className='pantry-modal-overlay' onClick={toggleModal}></div>
                <div className='pantry-modal-content popup'>
                    <video controls muted playsInline>
                            <source src={PantryDemo} type="video/mp4" />
                    </video>
                </div>
            </div>
        )}
        </>
    )
}

export default PantryModal;
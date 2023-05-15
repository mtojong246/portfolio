import './knife-purveyor-modal.styles.scss';
import KPDemo from '../Screenshots/Knife-Purveyor-Demo.mp4';

const KnifePurveyorModal = ({ isModalOpen, toggleModal }) => {
    return(
    <>
        {isModalOpen && (
            <div className='knife-purveyor-modal-container'>
                <div className='knife-purveyor-modal-overlay' onClick={toggleModal}></div>
                <div className='knife-purveyor-modal-content popup'>
                    <video controls muted playsInline>
                            <source src={KPDemo} type="video/mp4" />
                    </video>
                </div>
            </div>
        )}
    </>
    )
}

export default KnifePurveyorModal;
import './pantry.styles.scss';
import { Link } from 'react-router-dom';

const Pantry = () => {
    return (
        <div className='return-two'>
            <Link to='/'><button>{'< Return'}</button></Link>
        </div>
    )
}

export default Pantry;
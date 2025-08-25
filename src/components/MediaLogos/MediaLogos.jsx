import cnn from '../../assets/images/cnn.png';
import yahoo from '../../assets/images/yahoo.png';
import forbes from '../../assets/images/forbes.png';
import inc from '../../assets/images/inc.png';
import './MediaLogos.css'

const MediaLogos=()=>{
    return(
        <div className="d-flex align-items-center justify-content-around py-5 medialogosContainer">
            <img src={cnn} alt="cnn" width="100" height="40" className='medialogosImages'/>
            <img src={yahoo} alt="cnn" width="100" height="40" className='medialogosImages'/>
            <img src={forbes} alt="cnn" width="100" height="40" className='medialogosImages'/>
            <img src={yahoo} alt="cnn" width="100" height="40" className='medialogosImages'/>
        </div>
    );
};

export default MediaLogos;
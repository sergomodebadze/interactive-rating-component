import Star from '../../assets/icon-star.svg';
import style from './Star.module.css';


function Starr() {
    return (
        <div className={style.starDiv}>
            <img src={Star} alt="img" />
        </div>
    );
};

export default Starr;
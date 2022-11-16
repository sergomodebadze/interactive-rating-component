import ImageCss from './Image.module.css';
import Image from '../../assets/illustration-thank-you.svg';


function Imagee() {
    return (
        <div className={ImageCss.imageDiv}>
            <img src={Image} alt="img" />
        </div>
    );
};

export default Imagee;
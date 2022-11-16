import Style from './Text.module.css';

function Thanks() {
    return (
        <div className={Style.mainDiv}>
            <div className={Style.thanksDiv}>
                <p className={Style.thanks}>Thank you!</p>
            </div>
            <div className={Style.textDiv}>
                <p className={Style.text}>We appreciated you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    );
};

export default Thanks;
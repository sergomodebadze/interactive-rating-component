import Style from './Select.module.css';

function Select() {
    return (
        <div className={Style.mainDiv}>
            <div className={Style.div}>
                <p className={Style.text}>You selected 4 out of 5</p>
            </div>
        </div>
    );
};

export default Select;
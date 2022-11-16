import Classes from './Button.module.css';

function Button (props) {
    const statusHandler = () => {
        props.setStatus(!props.status)
    }
    return (
        <div className={Classes.buttonDiv}>
            <button onClick={statusHandler} type='button' className={Classes.button}>SUBMIT</button>
        </div>
    );
};

export default Button;
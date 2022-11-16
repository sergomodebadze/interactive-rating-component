import Classes from './Number.module.css';


function Numbers() {
    const button = [1, 2, 3, 4, 5];
    return (
        <div className={Classes.numberDiv}>
            {button.map((item) => {
                return (
                    <button type='button' className={Classes.number}>{item}</button>
                )
            })}
        </div>
    );
};
export default Numbers;
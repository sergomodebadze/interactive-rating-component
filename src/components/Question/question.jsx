import Style from '../Question/Question.module.css'

function Question () {
    return (
        <div className={Style.mainDiv}>
            <div className={Style.questionDiv}>
                <p className={Style.question}>
                    How did we do?
                </p>
            </div>
            <div className={Style.textDiv}>
                <p className={Style.text}>Plqase let us know how we did with your support request. All feedback is appreciated to help us improve offering!</p>
            </div>
        </div>
            
    );
};

export default Question;
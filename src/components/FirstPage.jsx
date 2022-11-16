import Starr from './Star/Star';
import Question from './Question/question';
import Numbers from './Number/Numbers';
import Button from './Button/Button';

function FirstPage(props) {
    return (
        <div>
            <Starr />
            <Question />
            <Numbers />
            <Button setStatus={props.setStatus} status={props.status} />
        </div>
    );
};

export default FirstPage;
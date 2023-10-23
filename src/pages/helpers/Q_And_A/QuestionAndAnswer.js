import React, { useState } from "react";
import styles from './QuestionAndAnswer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add([faAngleDown,faAngleUp]);

const QuestionAndAnswer = (props) => {

    const [answerVisibility, setAnswerVisibility] = useState('hide-answer');

    const showAnswerHandler = () => {
        if(answerVisibility === 'hide-answer'){
            setAnswerVisibility('show-answer');
        }else{
            setAnswerVisibility('hide-answer');
        }
    }

    return (
        <div className={styles['question-container']}>
            <div className={styles['question-sub-container']}>
                <div className={styles.question}>{props.question}</div>
                <div onClick={showAnswerHandler}>
                    {answerVisibility === 'hide-answer' ? <FontAwesomeIcon icon="fa-solid fa-angle-down" className={styles.arrows}/> : <FontAwesomeIcon icon="fa-solid fa-angle-up" className={styles.arrows}/>}
                </div>
            </div>
            <div className={styles[answerVisibility]}>{props.answer}</div>
        </div>
    )
}

export default QuestionAndAnswer;
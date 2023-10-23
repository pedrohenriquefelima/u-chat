import QuestionAndAnswer from "./QuestionAndAnswer";
import styles from './FrequentlyAskedQuestions.module.css';

const FrequentlyAskedQuestions = (props) => {

    const Q_AND_A = [
        {
            id: 1,
            question: 'How does UChat works?',
            answer: 'edejdjendjen'
        },
        {
            id: 2,
            question: 'is it paid?',
            answer: 'edejdjendjen'
        },
        {
            id: 3,
            question: 'will it really help me learning a new language?',
            answer: 'erieubdueudeibde'
        },
        {
            id: 4,
            question: 'how can I get started?',
            answer: 'erieubdueudeibde'
        }
    ]

    return (
        <div className={styles['q_and_a-container']}>
            <h2>Frequently Asked Questions</h2>
            {Q_AND_A.map(item => {
                return <QuestionAndAnswer key={item.id} question={item.question} answer={item.answer}/>
            })}
        </div>
    )
}

export default FrequentlyAskedQuestions;
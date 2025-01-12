import {useEffect, useState} from 'react';

export default function Question(props) {
    const [answer, setAnswer] = useState({text: '', correct: false});
    const finalQuestion = props.questionsLength-1 === props.questionIndex;
    const handleChange = answer => setAnswer({text: answer, correct: props.answers.find(choice => choice.text === answer).correct});
    useEffect(() => setAnswer({text: '', correct: false}), [props]);

    return (
        <div className='card'>
            <h1>{props.question}</h1>
            {props.answers.map((choice, i) => (
                <label key={i}>
                    <input onChange={() => handleChange(choice.text)} checked={answer.text === choice.text} type='radio'/>
                    {choice.text}
                </label>
            ))}
            <button onClick={() => finalQuestion ? props.handleSubmit(answer) : props.handleNext(answer)} disabled={answer.text.length === 0}>{finalQuestion ? 'Submit' : 'Next'}</button>
        </div>
    )
}
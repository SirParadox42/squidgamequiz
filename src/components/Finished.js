export default function Finished(props) {
    return (
        <div className='card'>
            <h1>{(props.numCorrect/10)*100}%</h1>
            <p>You got {props.numCorrect}/10 correct.</p>
            <button id='restart' onClick={props.handleRestart}>Try Again</button>
        </div>
    );
}
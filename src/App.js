import {useState} from 'react';
import Question from './components/Question';
import questions from './data/questions';
import Finished from './components/Finished';

function App() {
  const [quizMode, setQuizMode] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [numCorrect, setNumCorrect] = useState(0);
  const questionIndex = questionNumber-1;

  const handleNext = answer => {
    setQuestionNumber((prev) => prev + 1);
    setNumCorrect((prev) => (answer.correct ? prev + 1 : prev));
  };
  const handleSubmit = answer => {
    setNumCorrect(prev => answer.correct ? prev+1 : prev);
    setQuizMode(false);
  };
  const handleRestart = () => {
    setQuizMode(true);
    setQuestionNumber(1);
    setNumCorrect(0);
  };

  return (
    <>
      <h1 id='title'>Squid Game Quiz</h1>
      {quizMode && <Question handleNext={handleNext} handleSubmit={handleSubmit} question={questions[questionIndex].question} answers={questions[questionIndex].answers} questionIndex={questionIndex} questionsLength={questions.length}/>}
      {!quizMode && <Finished numCorrect={numCorrect} handleRestart={handleRestart}/>}
    </>
  );
}

export default App;
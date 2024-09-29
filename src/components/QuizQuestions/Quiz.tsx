import styles from "styles/quiz.module.css";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { QuizProps } from "../../interfaces/QuizProps.interface";
import { STATUSES } from "../../enums/statuses.enum";
import { useQuiz } from "./useQuiz";

const Quiz = ({
  question,
  answers,
  idx,
  length,
  questionAnswers,
  setQuestionAnswers,
  activeAnswers,
  setActiveAnswers,
}: QuizProps) => {
  const {
    error,
    handleNavigateBack,
    handleNavigateForward,
    handleChooseAnswer,
  } = useQuiz({
    question,
    answers,
    idx,
    length,
    questionAnswers,
    setQuestionAnswers,
    activeAnswers,
    setActiveAnswers,
  });

  return (
    <div>
      <div className={styles.contentWrapper}>
        <div className={styles.questionWrapper}>
          <h1>{question}</h1>
        </div>
        <div className={styles.buttonsContainer}>
          {answers.map((answer: string, index: number) => {
            return (
              <button
                className={`${styles.answerButton} ${
                  error === STATUSES.Error ? styles.error : ""
                } ${
                  activeAnswers[idx - 1] === answer ? styles.activeAnswer : ""
                }`}
                onClick={() => handleChooseAnswer(answer, idx - 1)}
              >{`${String.fromCharCode("a".charCodeAt(0) + index)}. ${answer}`}</button>
            );
          })}
        </div>
        {error !== STATUSES.Success && (
          <div className={styles.errorParagraphWrapper}>
            <p>You need to choose an answer!</p>
          </div>
        )}
        <div className={styles.bottomWrapper}>
          <button
            className={styles.goBack}
            onClick={() => handleNavigateBack(idx)}
          >
            Back
          </button>
          <button
            className={styles.nextQuestion}
            onClick={() => {
              handleNavigateForward(idx);
            }}
          >
            {idx === length ? "Discover your results" : "Next question"}
            <img src="arrowNext.png" alt="arrowNext" />
          </button>
        </div>
      </div>
      <div className={styles.progressBar}>
        <CircularProgressbar
          styles={buildStyles({ pathColor: "#AADDF3", trailColor: "#EEF7FB" })}
          value={idx}
          maxValue={length}
          text={`${idx}/${length}`}
        />
      </div>
    </div>
  );
};

export default Quiz;

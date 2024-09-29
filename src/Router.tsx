import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/QuizHome/Home";
import Quiz from "./components/QuizQuestions/Quiz";
import Results from "./components/QuizResults/Results";
import quiz from "./questions";

export default () => {
  const [questionAnswers, setQuestionAnswers] = useState<string[]>(
    Array(quiz.length).fill("")
  );
  const [activeAnswers, setActiveAnswers] = useState<string[]>(
    Array(quiz.length).fill("")
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {quiz.map(({ question, answers }, idx) => {
          return (
            <>
              <Route
                path={`/question-${idx + 1}`}
                element={
                  <Quiz
                    key={idx}
                    question={question}
                    answers={answers}
                    idx={idx + 1}
                    length={quiz.length}
                    questionAnswers={questionAnswers}
                    setQuestionAnswers={setQuestionAnswers}
                    activeAnswers={activeAnswers}
                    setActiveAnswers={setActiveAnswers}
                  />
                }
              />
            </>
          );
        })}
        <Route
          path="/quiz-results"
          element={
            <Results
              questionAnswers={questionAnswers}
              setQuestionAnswers={setQuestionAnswers}
              length={quiz.length}
              setActiveAnswers={setActiveAnswers}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

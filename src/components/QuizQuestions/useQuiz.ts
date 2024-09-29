import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StatusesType, STATUSES } from "enums/statuses.enum";
import { QuizProps } from "interfaces/QuizProps.interface";

const useQuiz = ({
  idx,
  length,
  questionAnswers,
  setQuestionAnswers,
  activeAnswers,
  setActiveAnswers,
}: QuizProps) => {
  const navigate = useNavigate();
  const [error, setError] = useState<StatusesType>(STATUSES.Success);

  const handleNavigateBack = (questionNumber: number) => {
    if (questionNumber === 1) return navigate("/");
    navigate(`/question-${questionNumber - 1}`);
  };

  const handleNavigateForward = (questionNumber: number) => {
    if (questionAnswers[idx - 1] === "") {
      setError(STATUSES.Error);
      return;
    }

    if (questionNumber === length) return navigate("/quiz-results");

    navigate(`/question-${questionNumber + 1}`);
  };

  const handleChooseAnswer = (answer: string, idx: number) => {
    setQuestionAnswers((prev) => {
      prev = [...questionAnswers];
      prev[idx] = answer.toLowerCase();
      return prev;
    });
    setError(STATUSES.Success);
    setActiveAnswers((prev) => {
      prev = [...activeAnswers];
      prev[idx] = answer;
      return prev;
    });
  };

  return {
    error,
    handleNavigateBack,
    handleNavigateForward,
    handleChooseAnswer,
  };
};

export { useQuiz };

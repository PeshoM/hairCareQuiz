export interface QuizProps {
  question: string;
  answers: string[];
  idx: number;
  length: number;
  questionAnswers: string[];
  setQuestionAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  activeAnswers: string[];
  setActiveAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

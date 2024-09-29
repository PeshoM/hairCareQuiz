export interface ResultsProps {
  questionAnswers: string[];
  setQuestionAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  length: number;
  setActiveAnswers: React.Dispatch<React.SetStateAction<string[]>>;
}

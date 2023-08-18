export interface TriviaCategoryContainer {
  trivia_categories: TriviaCategory[];
}
export interface TriviaCategory {
  id?: number;
  name?: string;
}

export interface TriviaResults {
  response_code: number;
  results: TriviaQuestion[];
}

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options?: string[];
  choice?: string;
}
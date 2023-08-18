import { Component, OnInit } from '@angular/core';
import { TriviaQuestion } from '../../models/trivia.model';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
})
export class QuizResultsComponent implements OnInit {
  correctAnswersCount: number = 0;
  questions: TriviaQuestion[] = [];

  constructor() {}

  ngOnInit() {
    console.log(
      localStorage.getItem('questions') as unknown as TriviaQuestion[]
    );
  }

  evaluateAnswers(): void {
    this.questions?.forEach((q, index) => {
      if (q.choice === q.correct_answer) this.correctAnswersCount++;
    });
    console.log(this.correctAnswersCount);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriviaQuestion } from '../../models/trivia.model';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
})
export class QuizResultsComponent implements OnInit {
  correctAnswersCount: number = 0;
  questions: TriviaQuestion[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.questions = JSON.parse(
      localStorage.getItem('questions') || '[]'
    ) as unknown as TriviaQuestion[];
    this.evaluateAnswers();
  }

  evaluateAnswers(): void {
    this.questions?.forEach((q, index) => {
      if (q.choice === q.correct_answer) this.correctAnswersCount++;
    });
  }

  reset(): void {
    this.questions = [];
    this.correctAnswersCount = 0;
    localStorage.removeItem('questions');
    this.router.navigate(['Home']);
  }
}

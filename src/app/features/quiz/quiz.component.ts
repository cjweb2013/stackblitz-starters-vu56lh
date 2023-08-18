import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TriviaQuestion } from '../../models/trivia.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  @Input() categoryId?: number;
  @Input() difficulty?: string;
  @Input() questions?: TriviaQuestion[];
  quizForm = this.fb.nonNullable.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.questions);
  }

  buildForm(): void {
    if (this.questions) {
    }
  }

  evaluateQuiz(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MathHelper } from '../../helpers/math.helper';
import { TriviaQuestion } from '../../models/trivia.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  @Input() categoryId?: number;
  @Input() difficulty?: string;
  @Input() questions?: TriviaQuestion[];
  answers: string[] = [];
  isEvaluated = false;
  isCompleted = false;
  quizForm = this.fb.nonNullable.group({});

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    console.log(this.questions);
    this.buildForm();
  }

  /** Take the questions array and build options for answers */
  buildForm(): void {
    if (this.questions) {
      console.log(this.questions);
      this.questions.forEach((q, index) => {
        // create an answers array matching the length and indexes of questions array
        // to be populated with each selection
        this.answers.push('');
        // combine correct answer at random position to incorrect_answers array to create options
        const randomIndex = MathHelper.generateRandomInt(
          q.incorrect_answers.length
        );
        let options = q.incorrect_answers;
        options.splice(randomIndex, 0, q.correct_answer);
        q.options = options;

        this.quizForm.addControl(
          `question${index}`,
          new FormControl(q.options, Validators.required)
        );
      });
    }
  }

  verifyCompleted(): boolean {
    let unanswered: string[] = [];
    this.answers.forEach((a) => {
      if (a === '') unanswered.push(a);
    });
    return !unanswered.length;
  }

  navigateToResults(): void {
    localStorage.setItem('questions', JSON.stringify(this.questions));
    this.router.navigate(['QuizResults']);
  }

  /**Set the selected answer into the answers array at indexed position */
  selectOption(option: string, index: number): void {
    if (this.answers?.length) {
      this.answers[index] = option;
      this.quizForm.controls;
      console.log(this.quizForm.controls);
      if (this.verifyCompleted()) this.isCompleted = true;
    }
  }
}

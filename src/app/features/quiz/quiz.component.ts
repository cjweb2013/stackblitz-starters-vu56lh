import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  correctAnswers = 0;
  isEvaluated = false;
  isCompleted = false;
  quizForm = this.fb.nonNullable.group({});

  constructor(private fb: FormBuilder) {}

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

  evaluateAnswers(): void {
    this.questions?.forEach((q, index) => {
      if (this.answers[index] === q.correct_answer) this.correctAnswers++;
    });
    console.log(this.correctAnswers);
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

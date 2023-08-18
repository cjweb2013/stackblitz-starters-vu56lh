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
  answers?: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.questions);
    this.buildForm();
  }

  /** Take the questions array and build options for answers */
  buildForm(): void {
    if (this.questions) {
      console.log(this.questions)
      this.questions.forEach(q => {
        // create an answers array matching the length and indexes of questions array
        // to be populated with each selection
        this.answers?.push('');
        // combine correct answer at random position to incorrect_answers array to create options
        const randomIndex = this.generateRandomInt(q.incorrect_answers.length);
        q.options = q.incorrect_answers.splice(randomIndex, 0, q.correct_answer);
        console.log(q.correct_answer);
      });
      console.log('new questions', this.questions)
    }
  }

  /**generate a random index position for the insertion of the correct answer */
  generateRandomInt(arrayLength: number): number {
    return Math.floor(Math.random() * (arrayLength + 1));
  }


  evaluateQuiz(): void {

  }

  /**Set the selected answer into the answers array at indexed position */
  selectOption(option: string, index: number): void {
    if (this.answers?.length) {
      this.answers[index] = option;
    }
  }
}

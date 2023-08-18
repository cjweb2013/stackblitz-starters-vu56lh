import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastClassEnum } from '../../enums/snackbar.enum';
import { TriviaCategory, TriviaQuestion } from '../../models/trivia.model';
import { SnackbarService } from '../../services/snackbar.service';
import { TriviaService } from '../../services/trivia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  difficultyLevels: string[] = ['easy', 'medium', 'hard'];
  isLoading = false;
  numberCorrect?: number;
  selectedCategory?: number;
  selectedDifficulty?: string;
  triviaCategories: TriviaCategory[] = [];
  triviaQuestions?: TriviaQuestion[] = [];

  constructor(
    private snackbarService: SnackbarService,
    private triviaService: TriviaService
  ) {}

  ngOnInit() {
    this.getTrivia();
  }

  createTriviaQuestions(): void {
    console.log(this.selectedCategory);
    console.log(this.selectedDifficulty);
    if (this.selectedDifficulty && this.selectedCategory) {
      this.isLoading = true;
      let message = '',
        toastClass = ToastClassEnum.default;
      this.triviaService
        .getTriviaQuestions(5, this.selectedCategory, this.selectedDifficulty)
        .subscribe({
          next: (response) => {
            this.triviaQuestions = response.results;
            message = 'Quiz generated successfully!';
            toastClass = ToastClassEnum.success;
          },
          error: (err) => {
            console.log('Error', err);
            message =
              'There was an error retrieving your questions. Please try again.';
            toastClass = ToastClassEnum.warning;
          },
        })
        .add(() => {
          this.isLoading = false;
          this.snackbarService.openSnackbar(message, toastClass);
        });
    }
  }

  getTrivia(): void {
    this.isLoading = true;
    this.triviaService
      .getTriviaCategories()
      .subscribe({
        next: (results) => {
          this.triviaCategories = results.trivia_categories;
          console.log(this.triviaCategories);
        },
        error: () => {
          const message =
            'There was an error retrieving categories. Please try again.';
          this.snackbarService.openSnackbar(message, ToastClassEnum.warning);
        },
      })
      .add(() => (this.isLoading = false));
  }

  logChange(change: number | string | undefined): void {
    console.log(change);
  }

  quizEvaluatedEvent(numberCorrect: number): void {
    this.numberCorrect = numberCorrect;
  }
}

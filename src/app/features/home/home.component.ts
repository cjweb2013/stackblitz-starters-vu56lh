import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastClassEnum } from '../../enums/snackbar.enum';
import { TriviaCategory, TriviaResults } from '../../models/trivia.model';
import { SnackbarService } from '../../services/snackbar.service';
import { TriviaService } from '../../services/trivia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  difficultyLevels: string[] = ['easy', 'medium', 'hard'];
  isLoading = false;
  selectedCategory: TriviaCategory = { id: 0, name: '' };
  selectedDifficulty: string = '';
  triviaCategories: TriviaCategory[] = [];
  triviaResults?: TriviaResults;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private triviaService: TriviaService
  ) {}

  ngOnInit() {
    this.getTrivia();
  }

  createTriviaQuestions(): void {
    if (this.selectedDifficulty && this.selectedCategory.id) {
      this.isLoading = true;
      let message = '',
        toastClass = ToastClassEnum.default;
      this.triviaService
        .getTriviaQuestions(
          10,
          this.selectedCategory?.id,
          this.selectedDifficulty
        )
        .subscribe({
          next: (results) => {
            this.triviaResults = results;
            message = 'Quiz generated successfully!';
            toastClass = ToastClassEnum.success;
            console.log(results);
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

  // setCategory(category: TriviaCategory): void {
  //   this.selectedCategory = category;
  // }
}

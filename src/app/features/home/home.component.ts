import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastClassEnum } from '../../enums/snackbar.enum';
import { TriviaDifficulty, TriviaCategory } from '../../models/trivia.model';
import { SnackbarService } from '../../services/snackbar.service';
import { TriviaService } from '../../services/trivia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dificultyLevels: TriviaDifficulty[] = [
    { id: 1, title: 'Easy' },
    { id: 2, title: 'Medium' },
    { id: 3, title: 'Hard' },
  ];
  isLoading = false;
  selectedCategory: TriviaCategory = { id: 0, name: '' };
  selectedDifficulty?: TriviaDifficulty;
  triviaCategories: TriviaCategory[] = [];

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private triviaService: TriviaService
  ) {}

  ngOnInit() {
    this.getTrivia();
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
  createTrivia(): void {}
  setCategory(category: TriviaCategory): void {
    this.selectedCategory = category;
  }
}

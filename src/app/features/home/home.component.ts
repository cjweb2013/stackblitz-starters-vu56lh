import { Component, OnInit } from '@angular/core';
import { ToastClassEnum } from '../../enums/snackbar.enum';
import { TriviaCategory } from '../../models/trivia.model';
import { SnackbarService } from '../../services/snackbar.service';
import { TriviaService } from '../../services/trivia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  triviaCategories: TriviaCategory[] = [];
  constructor(
    private snackbarService: SnackbarService,
    private triviaService: TriviaService
  ) {}

  ngOnInit() {
    this.snackbarService.openSnackbar('test snackbar', ToastClassEnum.warning);
    this.getTrivia();
  }

  getTrivia(): void {
    this.isLoading = true;
    this.triviaService
      .getTriviaCategories()
      .subscribe({
        next: (categories) => {
          this.triviaCategories = categories;
        },
        error: () => {
          const message =
            'There was an error retrieving categories. Please try again.';

          this.snackbarService.openSnackbar(message, ToastClassEnum.warning);
        },
      })
      .add(() => (this.isLoading = false));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  testTriviaCategories: TriviaCategory[] = [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Entertainment: Books' },
    { id: 11, name: 'Entertainment: Film' },
    { id: 12, name: 'Entertainment: Music' },
    { id: 13, name: 'Entertainment: Musicals & Theatres' },
    { id: 14, name: 'Entertainment: Television' },
    { id: 15, name: 'Entertainment: Video Games' },
    { id: 16, name: 'Entertainment: Board Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Science: Computers' },
    { id: 19, name: 'Science: Mathematics' },
    { id: 20, name: 'Mythology' },
    { id: 21, name: 'Sports' },
    { id: 22, name: 'Geography' },
    { id: 23, name: 'History' },
    { id: 24, name: 'Politics' },
    { id: 25, name: 'Art' },
    { id: 26, name: 'Celebrities' },
    { id: 27, name: 'Animals' },
    { id: 28, name: 'Vehicles' },
    { id: 29, name: 'Entertainment: Comics' },
    { id: 30, name: 'Science: Gadgets' },
    { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
    { id: 32, name: 'Entertainment: Cartoon & Animations' },
  ];
  selectionForm = this.fb.group({
    category: this.fb.nonNullable.control('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private triviaService: TriviaService
  ) {}

  ngOnInit() {
    this.snackbarService.openSnackbar('test snackbar', ToastClassEnum.warning);
    // this.getTrivia();
    this.triviaCategories = this.testTriviaCategories;
    console.log(this.triviaCategories);
  }

  getTrivia(): void {
    this.isLoading = true;
    this.triviaService
      .getTriviaCategories()
      .subscribe({
        next: (categories) => {
          this.triviaCategories = categories;
          console.log(categories);
        },
        error: () => {
          const message =
            'There was an error retrieving categories. Please try again.';

          this.snackbarService.openSnackbar(message, ToastClassEnum.warning);
        },
      })
      .add(() => (this.isLoading = false));
  }
  onSubmit(): void {}
}

import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatTooltipModule,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
} from '@angular/material/tooltip'; //matTooltipPosition=[“above”, “below”, “left”, “right”]
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { QuizResultsComponent } from './features/quiz-results/quiz-results.component';

const matImports = [
  MatChipsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatButtonToggleModule,
];
const coreModules = [
  BrowserAnimationsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    ...matImports,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    ...coreModules,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuizResultsComponent,
  ],
  providers: [
    //Mat tooltip global config
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        showDelay: 750,
        hideDelay: 250,
        touchGestures: 'auto',
        touchendHideDelay: 500,
      },
    },
    //Angular Snackbar global config
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 7000,
        verticalPosition: 'top',
        panelClass: 'toast',
      },
    },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

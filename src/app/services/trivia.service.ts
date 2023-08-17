import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TriviaCategoryContainer, TriviaResults } from '../models/trivia.model';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  /** Get trivia Questions
   * @return trivia_categories: TriviaCategory{} - returns the list of categories for questions
   */
  getTriviaCategories(): Observable<TriviaCategoryContainer> {
    return this.http.get<TriviaCategoryContainer>(
      'https://opentdb.com/api_category.php'
    );
  }

  /** Get questions based on parameter selections 
   * @param amount = number of questions to retrieve. Default is 5
  */
  getTriviaQuestions(amount: number | 5, category: number, difficulty: string):Observable<TriviaResults> {
    return this.http.get<TriviaResults>(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty${difficulty}&type=multiple`
    )
  }
}

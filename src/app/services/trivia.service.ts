import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TriviaCategory } from '../models/trivia.model';

@Injectable()
export class TriviaService {
  constructor(private http: HttpClient) {}

  getTriviaCategories(): Observable<TriviaCategory[]> {
    return this.http.get<TriviaCategory[]>(
      'https://opentdb.com/api_category.php'
    );
  }
}

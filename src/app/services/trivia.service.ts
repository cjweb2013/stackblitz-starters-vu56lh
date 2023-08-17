import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TriviaCategoryContainer } from '../models/trivia.model';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  getTriviaCategories(): Observable<TriviaCategoryContainer> {
    return this.http.get<TriviaCategoryContainer>(
      'https://opentdb.com/api_category.php'
    );
  }
}

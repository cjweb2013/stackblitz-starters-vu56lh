import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TriviaQuestion } from '../../models/trivia.model';

@Directive({
  selector: '[appHighlightAnswer]',
})
export class HighlightAnswerDirective implements OnInit {
  question?: TriviaQuestion;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.checkAnswer();
  }

  checkAnswer(): void {
    let bgColor = this.element.nativeElement.styles.backgroundColor;
    console.log(bgColor);
    if (this.question?.choice === this.question.correct_answer) {
      bgColor = 'green';
    }
  }
}

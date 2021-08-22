import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  //input property binding
  @Input()quote!: Quote;

  //event emitters
  //delete event emitter
  @Output() deleteQuoteEvent = new EventEmitter<Quote>();

  //upvote event emitter
  @Output() upVoteQuoteEvent = new EventEmitter<Quote>();

  //downvote event emitter
  @Output() downVoteQuoteEvent = new EventEmitter<Quote>();


  deleteQuote(quote:Quote) {
    this.deleteQuoteEvent.emit(quote);
  }

  upVoteQuote(quote:Quote) {
    this.upVoteQuoteEvent.emit(quote);
  }

  downVoteQuote(quote:Quote) {
    this.downVoteQuoteEvent.emit(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

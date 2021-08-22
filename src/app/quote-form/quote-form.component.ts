import { Component, OnInit, Output , EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @ViewChild('f')quoteForm!: NgForm;
  newQuote = new Quote(0, '', '', '', new Date());

  //event emitter
  @Output() addQuote = new EventEmitter<Quote>();

  //displaySuccessMessage
  displaySuccessMessage = false;
  constructor() { }

  onSubmit() {
    this.displaySuccessMessage = true;

    //create a new quote
    this.newQuote.author = this.quoteForm.value.author;
    this.newQuote.statement = this.quoteForm.value.quoteStatement;
    this.newQuote.createdBy = this.quoteForm.value.createdBy;
    this.addQuote.emit(this.newQuote);
    this.quoteForm.reset();
  }
  ngOnInit(): void {
  }

}

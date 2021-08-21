import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'A website without visitors is like a ship lost in the horizon','Dr. Christopher Dayagdag','Maureen'),
    new Quote(2,'A user interface is like a joke. If you have to explain it, it is not that good','Unknown', 'Maureen'),
    new Quote(3,'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away','Antonie De-Saint Exupery','Maureen'),
    new Quote(4,'Great web design without functionality is like a sports car with no engine','Paul Cookson','Maureen'),
    new Quote(5,'It is not a bug, it is an undocumented feature!','Anonymous','Maureen'),
  ]
  goals: any;

  toggleDetails(index: number) {
    this.goals[index].showVotes = !this.goals[index].showVotes;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, statement:'A website without visitors is like a ship lost in the horizon', author:'Dr. Christopher Dayagdag', createdBy:'Maureen'},
    {id:2, statement:'A user interface is like a joke. If you have to explain it, it is not that good', author:'Unknown', createdBy:'Maureen'},
    {id:3, statement:'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away', author:'Antonie De-Saint Exupery', createdBy:'Maureen'},
    {id:4, statement:'Great web design without functionality is like a sports car with no engine', author:'Paul Cookson', createdBy:'Maureen'},
    {id:5, statement:'It is not a bug, it is an undocumented feature!', author:'Anonymous', createdBy:'Maureen'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

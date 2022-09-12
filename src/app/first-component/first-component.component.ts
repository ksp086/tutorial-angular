import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  // templateUrl: './first-component.component.html', // template url
  template: '<h1> {{title}} Works <h1>', // inline html
  // styleUrls: ['./first-component.component.css'], // multiple css files can be used to style 
  styles: ['h1 {color: red;}'], // inline styles
})
export class FirstComponentComponent implements OnInit {
  title = 'First Component';

  constructor() { }

  ngOnInit(): void {
  }

}

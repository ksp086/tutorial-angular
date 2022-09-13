import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  // 1
  // invoking a method in the component
  title = "Invoking a method using interpolation"
  getTitle():string {
    return this.title;
  }
  
  // 3
  // mathematical operations
  max(first: number, second: number) {
    return Math.max(first, second);
  }

  // 4
  // bind to an element property
  // 4.1 image source
  imageUrl = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";

  // 5
  // template reference variable
  items = [
    {id:'1', name:'mobile'},
    {id:'2', name:'laptop'},
    {id:'3', name:'desktop'},
  ];

  // 6
  // pipes
  upper_case = 'abcdefgh';
  json_pipe = [
    {id:'1', name:'mobile'},
    {id:'2', name:'laptop'},
    {id:'3', name:'desktop'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

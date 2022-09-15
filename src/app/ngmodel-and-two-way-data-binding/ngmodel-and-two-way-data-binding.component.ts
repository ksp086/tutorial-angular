import { Component, OnInit } from '@angular/core';
// 3
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ngmodel-and-two-way-data-binding',
  templateUrl: './ngmodel-and-two-way-data-binding.component.html',
  styleUrls: ['./ngmodel-and-two-way-data-binding.component.css']
})
export class NgmodelAndTwoWayDataBindingComponent implements OnInit {
  // 1
  // two way property binding - separately
  name = "";
  clearName() {
    this.name = "";
  }

  // 2
  // ngModel
  // forms module
  value = "";
  clearValue() {
    this.value = "";
  }

  // 3
  // custom two way binding
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  increment () {
    this.count++;
    this.countChange.emit(this.count);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  // 1
  // click
  title = "Event Binding";
  clickCount = 0;
  clickMe() {
    this.clickCount++;
  }

  // 3
  // multiple event handlers
  clickCount2 = this.clickCount;

  // 4
  // template reference variable
  val="";
  handleInput(element: any) {
    this.val = element.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

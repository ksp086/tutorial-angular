import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding2',
  templateUrl: './property-binding2.component.html',
  styleUrls: ['./property-binding2.component.css']
})
export class PropertyBinding2Component implements OnInit {
  // 1
  // binding to innerHTML with HTML tags
  p1 = "<b>Angular</b> is printed in bold";
  p2 = "<span>Span1</span><div>Div1</div><span>Span2</span>";

  // 2
  // images
  imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png";

  // 5
  // setting color
  color = "red";

  constructor() { }

  ngOnInit(): void {
  }

}

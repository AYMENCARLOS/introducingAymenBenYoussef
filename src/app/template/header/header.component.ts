import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Aymen BEN YOUSSEF';
  subTitle ='Senior Developer Java/Fullstack, Analyst, Tech enthusiast';

  constructor() { }

  ngOnInit() {
  }

}

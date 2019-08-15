import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template:`<h3>Hello</h3>
  <h3>
    Change detection is triggered at:
    <span [textContent]="time | date: 'hh:mm:ss:SSS'"></span>
  </h3>
  <button (click)="0">Trigger Change Detection</button>`,
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  get time(){
    return Date.now();
  }
  constructor() { }

  ngOnInit() {
  }

}

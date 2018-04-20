import { Component, OnInit } from '@angular/core';
import { SessionService } from '../_services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sayHelloText: string;

  constructor(private sessionService: SessionService) {
    this.sessionService.sessionStateChanged.subscribe((isSessionStarted) => {
      if (!isSessionStarted) {
        this.sayHelloText = "Hello stranger!";
      } else {
        var userName = this.sessionService.getSession().userName;
        this.sayHelloText = 'Hello ' + userName;
      }
    })
  }

  ngOnInit() {

    if (this.sessionService.isSessionOpen()) {
      var userName = this.sessionService.getSession().userName;
      this.sayHelloText = 'Hello ' + userName;
    } else {
      this.sayHelloText = 'Hello stranger!';
    }
  }
}

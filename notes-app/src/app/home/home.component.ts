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
  }

  ngOnInit() {

    console.log('ngOnInit() Home triggered.')

    if (this.sessionService.isSessionOpen()) {
      var userName = this.sessionService.getSession().userName;
      this.sayHelloText = 'hello ' + userName;
    } else {
      this.sayHelloText = 'Hello stranger!';
    }
  }

}

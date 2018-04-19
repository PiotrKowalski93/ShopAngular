import { Component, OnInit } from '@angular/core';
import { SessionService } from '../app/_services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessionStarted: boolean;

  constructor(private sessionService: SessionService, private router: Router) {
    this.sessionService.sessionStateChanged.subscribe((isSessionStarted) => {
      console.log(isSessionStarted);
      this.sessionStarted = isSessionStarted;
    })
  }

  logout() {
    this.sessionService.closeSession();
  }

}

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../app/_services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessionStarted: boolean;

  loggingButtonText: string;
  logout: string = 'Logout';
  login: string = 'Login';

  constructor(private sessionService: SessionService) {
  }

  public products: Array<any> =
  [
    { productName: 'Test1' },
    { productName: 'Test2' },
    { productName: 'Test3' },
    { productName: 'Test4' },
    { productName: 'Test5' },
    { productName: 'Test6' }
  ];

  ngOnInit() {

    console.log('ogOnInit() triggered.');

    var session = this.sessionService.getSession();

    if (session.userEmail != null) {
      this.sessionStarted = true;
      this.loggingButtonText = this.logout;
    }
    else {
      this.sessionStarted = false;
      this.loggingButtonText = this.login;
    }
  }
}

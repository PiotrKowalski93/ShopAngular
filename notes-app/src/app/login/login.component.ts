import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../_services/user.service'
import { SessionService } from '../_services/session.service';
import { HttpClient } from '@angular/common/http'
import { User } from '../_model/user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];

  userEmail: string;
  userPassword: string;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.getUsers().subscribe(
      data => {
        console.log('login() triggeres.');
        this.users = data as User[];

        for (var index = 0; index < this.users.length; index++) {
          var element = this.users[index] as User;

          if (element.Email === this.userEmail && element.Password === this.userPassword) {
            this.sessionService.openNewSession(element.Name, element.Email);
            this.router.navigate(['']);
          }
        }
      },
      err => console.log(err),
      () => console.log('Completed'))
  }

}

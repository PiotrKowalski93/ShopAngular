import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../_services/user.service'
import { HttpClient } from '@angular/common/http'
import { User } from '../_model/user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];S

  userEmail: string;
  userPassword: string;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data as User[];

        for (var index = 0; index < this.users.length; index++) {
          var element = this.users[index] as User;

          if (element.Email === this.userEmail && element.Password === this.userPassword) {
            console.log('User SecondName auth: ' + element.SecondName)
          }
        }
      },
      err => console.log(err),
      () => console.log('Completed'))
  }

}

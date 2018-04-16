import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { UserService } from '../_services/user.service'
import { EncryptionService } from '../_services/encryption.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private encryptionService: EncryptionService) {

  }

  ngOnInit() {
  }

  register() {
    this.user.Password = this.encryptionService.encryptPassword(this.user.Password)
    this.userService.registerUser(this.user).subscribe(() => console.log("send!"));
  };
}

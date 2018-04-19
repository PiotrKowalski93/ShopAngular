import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../_services/user.service'
import { SessionService } from '../_services/session.service';
import { HttpClient } from '@angular/common/http'
import { User } from '../_model/user'
import { Router } from '@angular/router'
import { EncryptionService } from '../_services/encryption.service';
import { SmsService } from '../_services/sms.service';
import { Receiver } from '../_model/receiver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  areCredentialsCorrect: boolean = false;
  userEmail: string;
  userPassword: string;
  code: number;
  user: User;

  otpCode: string;
  submittedOtpCode: string;

  isOtpWrong: boolean = false;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private encryptionService: EncryptionService,
    private smsService: SmsService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data as User[];

        for (var index = 0; index < this.users.length; index++) {
          var element = this.users[index] as User;
          let encryptedPassword = this.encryptionService.encryptPassword(this.userPassword)

          if (element.Email === this.userEmail && element.Password === encryptedPassword) {
            this.user = element;
            
            this.otpCode = this.encryptionService.generateOtp();
            console.log(this.otpCode);

            this.areCredentialsCorrect = true;
            this.smsService.sendSms(new Receiver(element.PhoneNumber, this.otpCode)).subscribe((response) => {
            }, (err) => {
              console.log(err);
            }, () => {
              console.log("Completed")
            });
          }
        }
      },
      err => console.log(err),
      () => console.log('Completed'))
  }

  submitOtpCode() {
    console.log(this.submittedOtpCode)
    console.log(this.otpCode)
    if (this.submittedOtpCode === this.otpCode) {
      this.isOtpWrong = true;
      this.sessionService.openNewSession(this.user.Name, this.user.Email);
      this.router.navigate(['']);
    } else {
      this.isOtpWrong = true;
    }
  }

}

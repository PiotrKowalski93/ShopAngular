import { User } from "../_model/user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

    users:  Observable<User[]>;

    constructor(private httpClient: HttpClient) {
    }

    getUsers() {
        console.log('getUsers()');
        return this.httpClient.get("http://localhost:55689/api/users");
    }

    getUser(id: number) {

    }

    registerUser(user: User) {
        console.log(user.Name + ", " + user.SecondName + ", " + user.Password + ", " + user.PhoneNumber + ", " + user.Email)
    }
}
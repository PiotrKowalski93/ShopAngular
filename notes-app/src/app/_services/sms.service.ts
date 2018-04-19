import { Injectable } from '@angular/core';
import { Receiver } from "../_model/receiver"
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { send } from 'q';


class Message {

    constructor(apiKey: string, number: string, message: string, sender: string) {
        this.apiKey = apiKey;
        this.number = number;
        this.message = message;
        this.sender = sender;
    }

    apiKey: string;
    number: string;
    message: string;
    sender: string;
    test: boolean = true;
}

@Injectable()
export class SmsService {

    apiKey = "https://api.gsmservice.pl/v5/send.php?login=PiotrKowalski&pass=ziomek1910&recipient=48792941017&message=Lamus&sender=SOIS";
             "https://api.gsmservice.pl/v5/send.php?login=PiotrKowalski&pass=ziomek1910&recipient=48506662871&message=Test&sender=SOIS&sandbox=1"
    sandbox = "&sandbox=1";

    constructor(private httpClient: HttpClient) {
    }

    sendSms(receiver: Receiver) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        // let address = "https://api.gsmservice.pl/v5/send.php?login=PiotrKowalski&pass=ziomek1910&recipient=48" + number + "&message="
        //     + code + "&sender=SOIS" + this.sandbox;


        return this.httpClient.post("http://localhost:55689/api/gateway", receiver);
    }
}
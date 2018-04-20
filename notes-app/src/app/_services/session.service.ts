import { Session } from '../_model/session'
import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class SessionService {

    session: Session;
    sessionStateChanged: EventEmitter<boolean> = new EventEmitter()

    constructor() {
    }

    getSession() {
        return this.session;
    }

    openNewSession(userName: string, userEmail: string) {
        this.session = new Session();
        this.session.userName = userName;
        this.session.userEmail = userEmail;

        this.sessionStateChanged.emit(true);
    }

    closeSession()
    {
        this.session = null;
        this.sessionStateChanged.emit(false);
    }

    isSessionOpen():boolean
    {
        if(this.session != null)
        {
            return true;
        }
        else{
            return false;
        }

    }
}
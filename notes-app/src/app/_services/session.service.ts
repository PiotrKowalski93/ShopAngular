import { Session } from '../_model/session'
import { Injectable } from '@angular/core'

@Injectable()
export class SessionService {

    session: Session;

    getSession() {
        return this.session;
    }

    openNewSession(userName: string, userEmail: string) {
        this.session = new Session();
        this.session.userName = userName;
        this.session.userEmail = userEmail;
    }

    closeSession()
    {
        this.session = null;
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
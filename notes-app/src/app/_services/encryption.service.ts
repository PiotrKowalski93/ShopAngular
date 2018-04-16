import * as sha256 from 'sha256'

export class EncryptionService{

    encryptPassword(password: string) {
        return sha256(password);
    }
}
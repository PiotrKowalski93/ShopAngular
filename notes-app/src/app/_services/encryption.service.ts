import * as sha256 from 'sha256'

export class EncryptionService{

    encruptPassword(password: string) {
        return sha256.x2(password);
    }
}
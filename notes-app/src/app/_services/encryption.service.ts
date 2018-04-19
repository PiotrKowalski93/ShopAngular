import * as sha256 from 'sha256'

export class EncryptionService {

    encryptPassword(password: string) {
        return sha256(password);
    }

    generateOtp(): string {
        return this.generateOtpPrefix() + this.randomIntFromInterval();
    }

    private randomIntFromInterval() {
        return Math.floor(Math.random() * (99999 - 11111 + 1) + 11111);
    }

    private generateOtpPrefix() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = require("crypto");
class CTXExtension {
}
exports.CTXExtension = CTXExtension;
class CookieSetting {
    constructor(expires = new Date(new Date().getTime() + 1000 * 3600 * 24 * 30)) {
        this.expires = expires;
        this.httpOnly = true;
        this.overwrite = true;
        this.path = "/";
        this.signed = true;
    }
}
class BasicCookie {
    constructor(expires = new Date(new Date().getTime() + 1000 * 3600 * 24 * 30)) {
        this.expires = expires;
    }
    CookieSetting() {
        return new CookieSetting(this.expires);
    }
}
class LoginCookie extends BasicCookie {
    constructor(name, userAccount) {
        super();
        this.userAccount = userAccount;
        this.userName = name;
    }
    static encrypt(data) {
        let result = "";
        var aes256 = Crypto.createCipher(this.algorithm, this.key);
        result += aes256.update(JSON.stringify(data), "utf8", "hex");
        result += aes256.final("hex");
        return result;
    }
    static decrypt(str) {
        let result = "";
        var aes256 = Crypto.createDecipher(this.algorithm, this.key);
        result += aes256.update(str, 'hex', 'utf8');
        result += aes256.final('utf8');
        let model;
        try {
            model = JSON.parse(result);
        }
        catch (e) {
            throw e;
        }
        return model;
    }
}
LoginCookie.key = "cookieAESKey";
LoginCookie.algorithm = "aes-256-cbc";
exports.LoginCookie = LoginCookie;
class CommonCrypt {
    static encrypt(data) {
        let result = "";
        var aes256 = Crypto.createCipher(this.algorithm, this.key);
        result += aes256.update(JSON.stringify(data), "utf8", "hex");
        result += aes256.final("hex");
        return result;
    }
    static decrypt(str) {
        let result = "";
        var aes256 = Crypto.createDecipher(this.algorithm, this.key);
        result += aes256.update(str, 'hex', 'utf8');
        result += aes256.final('utf8');
        let data;
        try {
            data = JSON.parse(result);
        }
        catch (e) {
            throw e;
        }
        return data;
    }
}
CommonCrypt.key = "commonAESKey";
CommonCrypt.algorithm = "aes-256-cbc";
exports.CommonCrypt = CommonCrypt;
exports.LoginCookieName = "LoginCookieName";

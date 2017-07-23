"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(accountName = "", password = "", userName = "", email = "") {
        this.id = null;
        this.accountName = accountName;
        this.password = password;
        this.userName = userName;
        this.email = email;
    }
}
exports.default = User;

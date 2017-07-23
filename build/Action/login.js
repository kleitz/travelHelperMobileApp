"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../Model/User");
const Common_1 = require("../Model/Common");
exports.Start = 'LoginStart';
exports.End = 'LoginEnd';
class LoginResponse {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    createPlainObject() {
        return { type: this.type, data: this.data };
    }
}
exports.LoginResponse = LoginResponse;
function dispatchLogin(dispatch, username = "", password = "") {
    return __awaiter(this, void 0, void 0, function* () {
        let user = new User_1.default();
        user.accountName = username;
        user.password = password;
        dispatch({ type: exports.Start });
        if (username || password) {
            let f = new Common_1.Fetch("/home/login", "POST", user);
            let response = yield f.startFetch();
            dispatch(new LoginResponse(exports.End, response).createPlainObject());
            return response;
        }
        else {
            let f = new Common_1.Ajax("/home/login", "POST", user);
            let response = f.startAjax();
            dispatch(new LoginResponse(exports.End, response).createPlainObject());
            return response;
        }
    });
}
exports.dispatchLogin = dispatchLogin;
function dispatchSignUp(dispatch, user) {
    return __awaiter(this, void 0, void 0, function* () {
        dispatch({ type: exports.Start });
        let f = new Common_1.Fetch("/home/signUp", "POST", user);
        let response = yield f.startFetch();
        dispatch(new LoginResponse(exports.End, response).createPlainObject());
        return response;
    });
}
exports.dispatchSignUp = dispatchSignUp;
function dispatchLogOut(dispatch) {
    return __awaiter(this, void 0, void 0, function* () {
        dispatch({ type: exports.Start });
        let f = new Common_1.Fetch("/home/logOut", "get");
        let response = yield f.startFetch();
        if (response.state) {
            response.state = false;
            response.data = "";
            dispatch(new LoginResponse(exports.End, response).createPlainObject());
            //dispatch({type:logoutClearPlan});
        }
        return response;
    });
}
exports.dispatchLogOut = dispatchLogOut;

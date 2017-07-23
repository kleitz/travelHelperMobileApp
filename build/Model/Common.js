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
class AjaxResponse {
    constructor(state = false, msg = "initial state", data = null) {
        this.state = state;
        this.msg = msg;
        this.data = data;
    }
}
exports.AjaxResponse = AjaxResponse;
class Fetch // want async ? use fetch
 {
    constructor(url, method = "GET", body = null) {
        this.url = url;
        this.method = method;
        this.headers = new Headers();
        this.body = body;
    }
    startFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch(this.url, { method: this.method, headers: this.headers, body: this.body == null ? this.body : JSON.stringify(this.body), credentials: 'same-origin' });
                let data = yield response.json();
                return data;
            }
            catch (e) {
                e = typeof (e) == "object" ? e.message : e;
                throw e;
            }
        });
    }
}
exports.Fetch = Fetch;
class Ajax // want sync ?? use ajax
 {
    constructor(url, method = "GET", data = null) {
        this.method = method;
        this.url = url;
        this.data = data;
    }
    startAjax() {
        let request = new XMLHttpRequest();
        let response = null;
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
            }
        };
        request.open(this.method, this.url, false);
        request.send(this.data);
        return response;
    }
}
exports.Ajax = Ajax;
class TimeCheck {
    static dateToYYMMDD(date) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
    static isHHMMFormat(str) {
        let reg = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])?$");
        return reg.test(str);
    }
    static notTimeOverlap(array, newTime) {
        if (!array)
            return true;
        let x2 = TimeCheck.hhmmStringToValue(newTime[0]);
        let y2 = TimeCheck.hhmmStringToValue(newTime[1]);
        let newTimeCrossDay = x2 > y2 ? true : false;
        for (var i of array) {
            let x1 = TimeCheck.hhmmStringToValue(i[0]);
            let y1 = TimeCheck.hhmmStringToValue(i[1]);
            let iCrossDay = x1 > y1 ? true : false;
            if (!newTimeCrossDay && !iCrossDay) {
                if ((x2 >= x1 && x2 < y1) || (y2 > x1 && y2 <= y1))
                    return false;
                else if (x1 > x2 && y1 < y2)
                    return false;
            }
            else {
            }
        }
        return true;
    }
    static notTimeOverlapInArray(array) {
        let tmp;
        let pass = true;
        let p = JSON.parse(JSON.stringify(array));
        while (p.length > 1) {
            tmp = p.splice(0, 1)[0];
            pass = TimeCheck.notTimeOverlap(p, tmp) ? pass : false;
        }
        return pass;
    }
    static timeIntervalSplitToArray(str) {
        let tmp = str.split(/-| - /);
        if (tmp.length != 2 || !TimeCheck.isHHMMFormat(tmp[0]) || !TimeCheck.isHHMMFormat(tmp[1]))
            throw "timeIntervalSplitToArray error";
        return tmp;
    }
    static hhmmStringToValue(str) {
        let v = 0;
        if (!TimeCheck.isHHMMFormat(str))
            throw "hhmmStringToValue error : " + str;
        let [hh, mm] = str.split(':');
        v += parseInt(hh);
        mm ? v += parseInt(mm) / 60 : null;
        return v;
    }
}
exports.TimeCheck = TimeCheck;

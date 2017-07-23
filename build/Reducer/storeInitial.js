"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orientation_1 = require("../Constant/orientation");
class Stroe {
    constructor() {
        this.login = new Login();
        this.mapData = new MapData();
        this.plans = new Array();
        this.deviceInfo = new DeviceInfo();
    }
}
exports.Stroe = Stroe;
class Login {
    constructor(isFetching = false, isAuth = false, userid = "") {
        this.isAuth = isAuth;
        this.isFetching = isFetching;
        this.userid = userid;
    }
}
exports.Login = Login;
class MapData {
    constructor(center = [22.160842601469007, 113.55575307725644], zoom = 5) {
        this.center = center;
        this.attractionList = new Array();
        this.restaurantList = new Array();
        this.souvenirList = new Array();
        this.trafficList = new Array();
        this.zoom = zoom;
    }
}
exports.MapData = MapData;
class DeviceInfo {
    constructor(o = orientation_1.default.PORTRAIT) {
        this.orientation = o;
    }
}
exports.DeviceInfo = DeviceInfo;
const initialState = new Stroe();
exports.initialState = initialState;

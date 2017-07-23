"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux = require("redux");
const login_1 = require("./login");
const mapData_1 = require("./mapData");
const plans_1 = require("./plans");
const deviceInfo_1 = require("./deviceInfo");
const reducer = redux.combineReducers({ login: login_1.default, mapData: mapData_1.default, plans: plans_1.default, deviceInfo: deviceInfo_1.default });
exports.default = reducer;

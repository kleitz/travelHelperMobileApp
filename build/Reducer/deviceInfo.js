"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionList = require("../Action");
const store = require("./storeInitial");
function login(state = store.initialState.deviceInfo, action) {
    switch (action.type) {
        case actionList.DeviceInfo.OrientationChange:
            return Object.assign({}, state, { orientation: action.data });
        default:
            return state;
    }
}
exports.default = login;

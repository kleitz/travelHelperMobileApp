"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionList = require("../Action");
const store = require("./storeInitial");
function login(state = store.initialState.login, action) {
    switch (action.type) {
        case actionList.Login.Start:
            return Object.assign({}, state, { isFetching: true });
        case actionList.Login.End:
            return Object.assign({}, state, { isFetching: false, isAuth: action.data.state, userid: action.data.data });
        default:
            return state;
    }
}
exports.default = login;

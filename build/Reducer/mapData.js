"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionList = require("../Action");
const store = require("./storeInitial");
function mapData(state = store.initialState.mapData, action) {
    switch (action.type) {
        case actionList.MapData.addAttraction:
            return Object.assign({}, state, { attractionList: [...state.attractionList, ...action.data] });
        case actionList.MapData.addRestaurant:
            return Object.assign({}, state, { restaurantList: [...state.restaurantList, ...action.data] });
        case actionList.MapData.addSouvenir:
            return Object.assign({}, state, { souvenirList: [...state.souvenirList, ...action.data] });
        case actionList.MapData.addTraffic:
            return Object.assign({}, state, { trafficList: [...state.trafficList, ...action.data] });
        case actionList.MapData.updateAttraction:
            var newa = action.data[0];
            var index = state.attractionList.findIndex((v) => v.id == newa.id);
            var nextState = Object.assign({}, state);
            nextState.attractionList.splice(index, 1, newa);
            return nextState;
        case actionList.MapData.updateRestaurant:
            var newr = action.data[0];
            var index = state.restaurantList.findIndex((v) => v.id == newr.id);
            var nextState = Object.assign({}, state);
            nextState.restaurantList.splice(index, 1, newr);
            return nextState;
        case actionList.MapData.updateSouvenir:
            var news = action.data[0];
            var index = state.souvenirList.findIndex((v) => v.id == news.id);
            var nextState = Object.assign({}, state);
            nextState.souvenirList.splice(index, 1, news);
            return nextState;
        case actionList.MapData.updateTraffic:
            var newt = action.data[0];
            var index = state.trafficList.findIndex((v) => v.id == newt.id);
            var nextState = Object.assign({}, state);
            nextState.trafficList.splice(index, 1, newt);
            return nextState;
        case actionList.MapData.deleteAttraction:
            var id = action.data[0];
            var index = state.attractionList.findIndex((v) => v.id == id);
            var nextState = Object.assign({}, state);
            nextState.attractionList.splice(index, 1);
            return nextState;
        case actionList.MapData.deleteRestaurant:
            var id = action.data[0];
            var index = state.restaurantList.findIndex((v) => v.id == id);
            var nextState = Object.assign({}, state);
            nextState.restaurantList.splice(index, 1);
            return nextState;
        case actionList.MapData.deleteSouvenir:
            var id = action.data[0];
            var index = state.souvenirList.findIndex((v) => v.id == id);
            var nextState = Object.assign({}, state);
            nextState.souvenirList.splice(index, 1);
            return nextState;
        case actionList.MapData.deleteTraffic:
            var id = action.data[0];
            var index = state.trafficList.findIndex((v) => v.id == id);
            var nextState = Object.assign({}, state);
            nextState.trafficList.splice(index, 1);
            return nextState;
        default:
            return state;
    }
}
exports.default = mapData;

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
const Common_1 = require("../Model/Common");
const Resource_1 = require("../Constant/Resource");
const Traffic_1 = require("../Model/Traffic");
exports.addAttraction = 'addAttraction';
exports.addTraffic = 'addTraffic';
exports.addRestaurant = 'addRestaurant';
exports.addSouvenir = 'addSouvenir';
exports.updateAttraction = 'updateAttraction';
exports.updateTraffic = 'updateTraffic';
exports.updateRestaurant = 'updateRestaurant';
exports.updateSouvenir = 'updateSouvenir';
exports.deleteAttraction = 'removeAttraction';
exports.deleteTraffic = 'removeTraffic';
exports.deleteRestaurant = 'removeRestaurant';
exports.deleteSouvenir = 'removeSouvenir';
exports.getAttraction = 'getAttraction';
exports.getTraffic = 'getTraffic';
exports.getRestaurant = 'getRestaurant';
exports.getSouvenir = 'getSouvenir';
class LocationResponse {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    createPlainObject() {
        return { type: this.type, data: this.data };
    }
}
exports.LocationResponse = LocationResponse;
function dispatchGetLocation(dispatch, type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let f;
            let t;
            switch (type) {
                case exports.getSouvenir:
                    f = new Common_1.Fetch(`/mapData/getLocation/${Resource_1.default.souvenir}`, "get");
                    t = exports.addSouvenir;
                    break;
                case exports.getTraffic:
                    f = new Common_1.Fetch(`/mapData/getLocation/${Resource_1.default.traffic}`, "get");
                    t = exports.addTraffic;
                    break;
                case exports.getAttraction:
                    f = new Common_1.Fetch(`/mapData/getLocation/${Resource_1.default.attraction}`, "get");
                    t = exports.addAttraction;
                    break;
                case exports.getRestaurant:
                    f = new Common_1.Fetch(`/mapData/getLocation/${Resource_1.default.restaurant}`, "get");
                    t = exports.addRestaurant;
                    break;
                default:
                    throw "error in getlocation";
            }
            let response = yield f.startFetch();
            if (response.state && response.data && response.data.length != 0)
                dispatch(new LocationResponse(t, response.data).createPlainObject());
            return response;
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchGetLocation = dispatchGetLocation;
function commonDispatch(dispatch, data, url, type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let f = new Common_1.Fetch(url, "POST", data);
            let response = yield f.startFetch();
            if (response.state)
                dispatch(new LocationResponse(type, [response.data]).createPlainObject());
            return response;
        }
        catch (e) {
            throw e;
        }
    });
}
function dispatchAddAttraction(dispatch, attraction = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!attraction)
                throw Resource_1.default.attractionIsNull;
            return yield commonDispatch(dispatch, attraction, "/mapData/addAttraction", exports.addAttraction);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchAddAttraction = dispatchAddAttraction;
function dispatchAddRestaurant(dispatch, restaurant = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!restaurant)
                throw Resource_1.default.restaurantIsNull;
            return yield commonDispatch(dispatch, restaurant, "/mapData/addRestaurant", exports.addRestaurant);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchAddRestaurant = dispatchAddRestaurant;
function dispatchAddTraffic(dispatch, traffic = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!Traffic_1.default)
                throw Resource_1.default.trafficIsNull;
            return yield commonDispatch(dispatch, traffic, "/mapData/addTraffic", exports.addTraffic);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchAddTraffic = dispatchAddTraffic;
function dispatchAddSouvenir(dispatch, souvenir = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!souvenir)
                throw Resource_1.default.souvenirIsNull;
            return yield commonDispatch(dispatch, souvenir, "/mapData/addSouvenir", exports.addSouvenir);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchAddSouvenir = dispatchAddSouvenir;
function dispatchUpdateAttraction(dispatch, attraction = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!attraction)
                throw Resource_1.default.attractionIsNull;
            return yield commonDispatch(dispatch, attraction, "/mapData/updateAttraction", exports.updateAttraction);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchUpdateAttraction = dispatchUpdateAttraction;
function dispatchUpdateRestaurant(dispatch, restaurant = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!restaurant)
                throw Resource_1.default.restaurantIsNull;
            return yield commonDispatch(dispatch, restaurant, "/mapData/updateRestaurant", exports.updateRestaurant);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchUpdateRestaurant = dispatchUpdateRestaurant;
function dispatchUpdateSouvenir(dispatch, souvenir = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!souvenir)
                throw Resource_1.default.souvenirIsNull;
            return yield commonDispatch(dispatch, souvenir, "/mapData/updateSouvenir", exports.updateSouvenir);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchUpdateSouvenir = dispatchUpdateSouvenir;
function dispatchUpdateTraffic(dispatch, traffic = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!traffic)
                throw Resource_1.default.souvenirIsNull;
            return yield commonDispatch(dispatch, traffic, "/mapData/updateTraffic", exports.updateTraffic);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchUpdateTraffic = dispatchUpdateTraffic;
function dispatchDeleteAttraction(dispatch, attraction = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!attraction)
                throw Resource_1.default.attractionIsNull;
            return yield commonDispatch(dispatch, attraction.id, "/mapData/deleteAttraction", exports.deleteAttraction);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchDeleteAttraction = dispatchDeleteAttraction;
function dispatchDeleteRestaurant(dispatch, restaurant = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!restaurant)
                throw Resource_1.default.restaurantIsNull;
            return yield commonDispatch(dispatch, restaurant.id, "/mapData/deleteRestaurant", exports.deleteRestaurant);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchDeleteRestaurant = dispatchDeleteRestaurant;
function dispatchDeleteSouvenir(dispatch, souvenir = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!souvenir)
                throw Resource_1.default.souvenirIsNull;
            return yield commonDispatch(dispatch, souvenir.id, "/mapData/deleteSouvenir", exports.deleteSouvenir);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchDeleteSouvenir = dispatchDeleteSouvenir;
function dispatchDeleteTraffic(dispatch, traffic = null) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!traffic)
                throw Resource_1.default.trafficIsNull;
            return yield commonDispatch(dispatch, traffic.id, "/mapData/deleteTraffic", exports.deleteTraffic);
        }
        catch (e) {
            throw e;
        }
    });
}
exports.dispatchDeleteTraffic = dispatchDeleteTraffic;

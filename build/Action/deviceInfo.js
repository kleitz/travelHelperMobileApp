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
exports.OrientationChange = 'OrientationChange';
class OrientationCase {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
    createPlainObject() {
        return { type: this.type, data: this.data };
    }
}
exports.OrientationCase = OrientationCase;
function dispatchOrientationChange(dispatch, orientation) {
    return __awaiter(this, void 0, void 0, function* () {
        dispatch({ type: exports.OrientationChange, data: orientation });
    });
}
exports.dispatchOrientationChange = dispatchOrientationChange;

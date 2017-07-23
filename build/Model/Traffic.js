"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationCommonModel_1 = require("./LocationCommonModel");
class Traffic extends LocationCommonModel_1.default {
    constructor() {
        super();
        this.step = "";
        this.totalTime = 0;
        this.price = 0;
        this.trafficDetail = "";
    }
    check() {
        let pass = super.check();
        pass = !this.location ? false : pass;
        pass = typeof (this.step) != "string" || typeof (this.totalTime) != "number" || typeof (this.price) != "number" || typeof (this.trafficDetail) != "string" ? false : true;
        for (var i of this.location)
            pass = !Number.isFinite(parseFloat(i.lat)) || !Number.isFinite(parseFloat(i.lng)) ? false : pass;
        return pass;
    }
}
exports.default = Traffic;

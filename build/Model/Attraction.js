"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationCommonModel_1 = require("./LocationCommonModel");
class Attraction extends LocationCommonModel_1.default {
    constructor() {
        super();
        this.location = new Array();
        this.attractionDetail = "";
        this.openTime = new Array();
        this.bestTime = new Array();
        this.avoidTime = new Array();
        this.remark = "";
    }
    check() {
        let pass = super.check();
        pass = !this.location ? false : pass;
        pass = typeof (this.attractionDetail) != "string" || typeof (this.remark) != "string" ? false : pass;
        for (let i of this.location)
            pass = !Number.isFinite(parseFloat(i.lat)) || !Number.isFinite(parseFloat(i.lat)) ? false : pass;
        for (let i of this.openTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        for (let i of this.bestTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        for (let i of this.avoidTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        return pass;
    }
}
exports.default = Attraction;

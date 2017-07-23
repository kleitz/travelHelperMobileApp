"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationCommonModel_1 = require("./LocationCommonModel");
class Restaurant extends LocationCommonModel_1.default {
    constructor() {
        super();
        this.brand = "";
        this.priceRange = new Array();
        this.restaurantDetail = "";
        this.openTime = new Array();
        this.bestTime = new Array();
        this.avoidTime = new Array();
        this.remark = "";
    }
    check() {
        let pass = super.check();
        pass = !this.location || !Number.isFinite(parseFloat(this.location.lat)) || !Number.isFinite(parseFloat(this.location.lng)) || !this.brand ? false : pass;
        pass = typeof (this.brand) != "string" || typeof (this.restaurantDetail) != "string" || typeof (this.remark) != "string" ? false : pass;
        for (let i of this.priceRange)
            pass = i == null || typeof (i) == "number" ? pass : false;
        for (let i of this.openTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        for (let i of this.bestTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        for (let i of this.avoidTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        return pass;
    }
}
exports.default = Restaurant;
/*
    brand is because it may have many Branch



*/ 

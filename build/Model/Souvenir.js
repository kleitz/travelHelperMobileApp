"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationCommonModel_1 = require("./LocationCommonModel");
class Souvenir extends LocationCommonModel_1.default {
    constructor() {
        super();
        this.brand = "";
        this.recommendFood = "";
        this.price = 0;
        this.dateCanBeStored = 0;
        this.souvenirDetail = "";
        this.openTime = new Array();
        this.remark = "";
    }
    check() {
        let pass = super.check();
        pass = typeof (this.brand) != "string" || typeof (this.recommendFood) != "string" || typeof (this.price) != "number" ? false : true;
        pass = typeof (this.dateCanBeStored) != "number" || typeof (this.souvenirDetail) != "string" || typeof (this.remark) != "string" ? false : true;
        pass = !this.location || !Number.isFinite(parseFloat(this.location.lat)) || !Number.isFinite(parseFloat(this.location.lng)) || !this.brand ? false : pass;
        for (let i of this.openTime)
            pass = typeof (i[0]) != "string" || typeof (i[1]) != "string" ? false : pass;
        return pass;
    }
}
exports.default = Souvenir;
/*
    brand is because it may have many Branch



*/ 

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Plan {
    constructor() {
        this.name = "";
        this.id = "";
        this.buildDate = "";
        this.country = new Array();
        this.city = new Array();
        this.appropriateDateStart = (new Date().getMonth() + 1) + "/" + new Date().getDate();
        this.appropriateDateEnd = this.appropriateDateStart;
        this.attractionList = new Array();
        this.restaurantList = new Array();
        this.souvenirList = new Array();
        this.trafficList = new Array();
        this.traveledRecord = new Array();
        this.remark = "";
    }
    check() {
        let pass = true;
        pass = this.name != null && this.name.length > 0 && typeof (this.name) == "string" ? pass : false;
        pass = this.remark != null && this.remark.length > 0 && typeof (this.remark) == "string" ? pass : false;
        pass = this.appropriateDateStart == null || !isNaN(new Date(this.appropriateDateStart).getTime()) ? pass : false;
        pass = this.appropriateDateEnd == null || !isNaN(new Date(this.appropriateDateEnd).getTime()) ? pass : false;
        for (let i of this.country)
            pass = typeof (i) == "string" ? pass : false;
        for (let i of this.city)
            pass = typeof (i) == "string" ? pass : false;
        for (let i of this.attractionList)
            pass = typeof (i.id) == "string" && typeof (i.name) == "string" ? pass : false;
        for (let i of this.restaurantList)
            pass = typeof (i.id) == "string" && typeof (i.name) == "string" ? pass : false;
        for (let i of this.souvenirList)
            pass = typeof (i.id) == "string" && typeof (i.name) == "string" ? pass : false;
        for (let i of this.trafficList)
            pass = typeof (i.id) == "string" && typeof (i.name) == "string" ? pass : false;
        for (let i of this.traveledRecord)
            pass = Object.assign(new TravelRecord(), i).check() ? pass : false;
        return pass;
    }
}
exports.Plan = Plan;
class TravelRecord {
    constructor(money = 0, travelDateStart = "", travelDateEnd = "", remark = "") {
        this.spentMoney = money;
        this.travelDateStart = travelDateStart;
        this.travelDateEnd = travelDateEnd;
        this.remark = remark;
    }
    check() {
        let pass = true;
        pass = this.remark != null && typeof (this.remark) == "string" ? pass : false;
        pass = this.spentMoney == null || isFinite(parseFloat(this.spentMoney)) ? pass : false;
        pass = this.travelDateStart == null || !isNaN(new Date(this.travelDateStart).getTime()) ? pass : false;
        pass = this.travelDateEnd == null || !isNaN(new Date(this.travelDateEnd).getTime()) ? pass : false;
        return pass;
    }
}
exports.TravelRecord = TravelRecord;
class PlanReportSetting {
    constructor() {
        this.attractionSetting = { priority: 1, order: true };
        this.restaurantSetting = { priority: 2, order: true };
        this.souvenirSetting = { priority: 3, order: false };
        this.trafficSetting = { priority: 4, order: true };
    }
}
PlanReportSetting.openTime = 1;
PlanReportSetting.price = 2;
PlanReportSetting.day = 3;
PlanReportSetting.total = 4;
exports.PlanReportSetting = PlanReportSetting;

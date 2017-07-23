"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocationCommonModel {
    constructor(id = "", country = "", city = "", buildDate = "", builderID = "", builderName = "", area = new Array(), name = "") {
        this.id = id;
        this.country = country;
        this.city = city;
        this.buildDate = buildDate;
        this.builderID = builderID;
        this.builderName = builderName;
        this.area = area;
        this.name = name;
    }
    static transTimeToOneLevelArray(array) {
        let result = new Array();
        for (var i of array) {
            result.push(i[0] + " - " + i[1]);
        }
        return result;
    }
    check() {
        let pass;
        pass = !this.country || !this.city || !this.area || !this.name ? false : true;
        return pass;
    }
}
exports.default = LocationCommonModel;

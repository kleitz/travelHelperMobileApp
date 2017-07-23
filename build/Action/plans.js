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
exports.GetPlanList = 'GetPlanList';
exports.ModifyPlan = 'ModifyPlan';
exports.AddPlan = "AddPlan";
exports.DeletePlan = "DeletePlan";
exports.logoutClearPlan = "logoutClearPlan";
function dispatchPostPlan(dispatch, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let add = data.id.length > 0 ? false : true;
        let newData;
        try {
            let url = add ? "/plan/addPlan" : "/plan/updatePlanDetail";
            let f = new Common_1.Fetch(url, "POST", data);
            newData = yield f.startFetch();
            if (!newData.state)
                throw newData.msg;
            let t = add ? exports.AddPlan : exports.ModifyPlan;
            dispatch({ type: t, data: newData.data });
        }
        catch (e) {
            e = typeof (e) == "object" ? e.message : e;
            throw e;
        }
        return newData;
    });
}
exports.dispatchPostPlan = dispatchPostPlan;
function dispatchGetPlanList(dispatch) {
    return __awaiter(this, void 0, void 0, function* () {
        let plans;
        try {
            let f = new Common_1.Fetch("/plan/getPlanList");
            plans = yield f.startFetch();
            if (!plans.state)
                throw plans.msg;
            dispatch({ type: exports.GetPlanList, data: plans.data });
        }
        catch (e) {
            e = typeof (e) == "object" ? e.message : e;
            return new Common_1.AjaxResponse(false, e);
        }
        return new Common_1.AjaxResponse(true);
        ;
    });
}
exports.dispatchGetPlanList = dispatchGetPlanList;
function dispatchDeletePlan(dispatch, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            let f = new Common_1.Fetch("/plan/deletePlan/" + id, "GET", null);
            response = yield f.startFetch();
            if (!response.state)
                throw response.msg;
            dispatch({ type: exports.DeletePlan, data: id });
        }
        catch (e) {
            e = typeof (e) == "object" ? e.message : e;
            throw e;
        }
        return response;
    });
}
exports.dispatchDeletePlan = dispatchDeletePlan;

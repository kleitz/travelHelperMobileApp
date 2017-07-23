import * as actionList from "../Action"
import * as store from "./storeInitial"
import { Action } from "redux"
import {Plan , TravelRecord} from "../Model/Plan";

export default function plans(state = store.initialState.plans, action) 
{
    switch (action.type) 
    {
        case actionList.Plans.GetPlanList:
            return [...state,...action.data];
        case actionList.Plans.AddPlan:
            return [action.data,...state];
        case actionList.Plans.ModifyPlan:
            var index=state.findIndex((v)=>v.id==action.data.id);
            return [...state.slice(0,index),action.data,...state.slice(index+1)];
        case actionList.Plans.DeletePlan:
            var index=state.findIndex((v)=>v.id==action.data);
            return [...state.slice(0,index),...state.slice(index+1)];
        case actionList.Plans.logoutClearPlan:
            return [];
        default:
            return state;
    }
}
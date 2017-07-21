import {Plan,TravelRecord} from "../Model/Plan"
import {PlainObject,Fetch,AjaxResponse,Ajax} from "../Model/Common";
import {Action} from "redux";

export const GetPlanList = 'GetPlanList';
export const ModifyPlan = 'ModifyPlan';
export const AddPlan = "AddPlan";
export const DeletePlan = "DeletePlan";
export const logoutClearPlan="logoutClearPlan";


export async function dispatchPostPlan(dispatch,data:Plan):Promise<AjaxResponse<Plan>>
{
    let add=data.id.length>0?false:true;
    let newData:AjaxResponse<Plan>;
    try
    {
        let url= add? "/plan/addPlan" : "/plan/updatePlanDetail" ;
        let f=new Fetch(url,"POST",data);
        newData=await f.startFetch();
        if(!newData.state)
            throw newData.msg;
        let t=add?AddPlan:ModifyPlan;
        dispatch({type:t,data:newData.data});
    }
    catch(e)
    {
        e= typeof(e)=="object" ?(e as Error).message :e;
        throw e;
    }
    return newData;
}

export async function dispatchGetPlanList(dispatch):Promise<AjaxResponse<string>>
{
    let plans:AjaxResponse<Array<Plan>>;
    try
    {
        let f=new Fetch("/plan/getPlanList");
        plans=await f.startFetch();
        if(!plans.state)
            throw plans.msg;
        dispatch({type:GetPlanList,data:plans.data});
    }
    catch(e)
    {
        e= typeof(e)=="object" ?(e as Error).message :e;
        return new AjaxResponse<string>(false,e);
    }
    return new AjaxResponse<string>(true);;
}

export async function dispatchDeletePlan(dispatch,id:string):Promise<AjaxResponse<string>>
{
    let response:AjaxResponse<string>;
    try
    {
        let f=new Fetch("/plan/deletePlan/"+id,"GET",null);
        response=await f.startFetch();
        if(!response.state)
            throw response.msg;
        dispatch({type:DeletePlan,data:id});
    }
    catch(e)
    {
        e= typeof(e)=="object" ?(e as Error).message :e;
        throw e;
    }
    return response;
}
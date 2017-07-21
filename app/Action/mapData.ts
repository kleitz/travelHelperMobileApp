import {PlainObject,Fetch,AjaxResponse,Ajax} from "../Model/Common";
import Resource from "../Constant/Resource";
import Attraction from "../Model/Attraction";
import Traffic from "../Model/Traffic";
import Restaurant from "../Model/Restaurant";
import Souvenir from "../Model/Souvenir";
import {Action} from "redux";

export const addAttraction = 'addAttraction';
export const addTraffic='addTraffic';
export const addRestaurant='addRestaurant';
export const addSouvenir='addSouvenir';
export const updateAttraction = 'updateAttraction';
export const updateTraffic='updateTraffic';
export const updateRestaurant='updateRestaurant';
export const updateSouvenir='updateSouvenir';
export const deleteAttraction = 'removeAttraction';
export const deleteTraffic='removeTraffic';
export const deleteRestaurant='removeRestaurant';
export const deleteSouvenir='removeSouvenir';
export const getAttraction = 'getAttraction';
export const getTraffic='getTraffic';
export const getRestaurant='getRestaurant';
export const getSouvenir='getSouvenir';
export class LocationResponse implements PlainObject , Action
{
    type:string;
    data:Array<any>;
    constructor(type:string,data:Array<any>)
    {
        this.type=type;
        this.data=data;
    }
    public createPlainObject()
    {
        return {type:this.type,data:this.data};
    }
}

export async function dispatchGetLocation(dispatch,type:string):Promise<AjaxResponse<any>>
{
    try
    {
        let f;
        let t;
        switch(type)
        {
            case getSouvenir:
                f=new Fetch(`/mapData/getLocation/${Resource.souvenir}`,"get");
                t=addSouvenir;
                break;   
            case getTraffic:
                f=new Fetch(`/mapData/getLocation/${Resource.traffic}`,"get");
                t=addTraffic;
                break; 
            case getAttraction:
                f=new Fetch(`/mapData/getLocation/${Resource.attraction}`,"get");
                t=addAttraction;
                break; 
            case getRestaurant:
                f=new Fetch(`/mapData/getLocation/${Resource.restaurant}`,"get");
                t=addRestaurant;
                break; 
            default:
                throw "error in getlocation";
        }
        let response:AjaxResponse<Array<any>>=await f.startFetch();
        if(response.state && response.data && response.data.length!=0)
            dispatch(new LocationResponse(t,response.data).createPlainObject());
        return response;
    }
    catch(e)
    {
       throw e; 
    }
}


async function commonDispatch(dispatch,data,url:string,type)
{
    try
    {
        let f=new Fetch(url,"POST",data);
        let response:AjaxResponse<any>=await f.startFetch();
        if(response.state)
            dispatch(new LocationResponse(type,[response.data]).createPlainObject());
        return response;
    }
    catch(e)
    {
        throw e;
    }
}


export async function dispatchAddAttraction(dispatch,attraction:Attraction=null):Promise<AjaxResponse<Attraction>>
{
    try
    {
        if(!attraction)
            throw Resource.attractionIsNull;
        return await commonDispatch(dispatch,attraction,"/mapData/addAttraction",addAttraction);
    }
    catch(e)
    {
        throw e;
    }
}

export async function dispatchAddRestaurant(dispatch , restaurant:Restaurant=null):Promise<AjaxResponse<Restaurant>>
{
    try
    {
        if(!restaurant)
            throw Resource.restaurantIsNull;
        return await commonDispatch(dispatch,restaurant,"/mapData/addRestaurant",addRestaurant);
    }
    catch(e)
    {
        throw e;
    }
}


export async function dispatchAddTraffic(dispatch , traffic:Traffic=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!Traffic)
            throw Resource.trafficIsNull;
        return await commonDispatch(dispatch,traffic,"/mapData/addTraffic",addTraffic);
    }
    catch(e)
    {
        throw e;
    }
}

export async function dispatchAddSouvenir(dispatch , souvenir:Souvenir=null):Promise<AjaxResponse<Souvenir>>
{
    try
    {
        if(!souvenir)
            throw Resource.souvenirIsNull;
        return await commonDispatch(dispatch,souvenir,"/mapData/addSouvenir",addSouvenir);
    }
    catch(e)
    {
        throw e;
    }
}




export async function dispatchUpdateAttraction(dispatch , attraction:Attraction=null):Promise<AjaxResponse<Attraction>>
{
    try
    {
        if(!attraction)
            throw Resource.attractionIsNull;
        return await commonDispatch(dispatch,attraction,"/mapData/updateAttraction",updateAttraction);
    }
    catch(e)
    {
        throw e;
    }
}

export async function dispatchUpdateRestaurant(dispatch , restaurant:Restaurant=null):Promise<AjaxResponse<Restaurant>>
{
    try
    {
        if(!restaurant)
            throw Resource.restaurantIsNull;
        return await commonDispatch(dispatch,restaurant,"/mapData/updateRestaurant",updateRestaurant);
    }
    catch(e)
    {
        throw e;
    }
}

export async function dispatchUpdateSouvenir(dispatch , souvenir:Souvenir=null):Promise<AjaxResponse<Souvenir>>
{
    try
    {
        if(!souvenir)
            throw Resource.souvenirIsNull;
        return await commonDispatch(dispatch,souvenir,"/mapData/updateSouvenir",updateSouvenir);
    }
    catch(e)
    {
        throw e;
    }
}

export async function dispatchUpdateTraffic(dispatch , traffic:Traffic=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!traffic)
            throw Resource.souvenirIsNull;
        return await commonDispatch(dispatch,traffic,"/mapData/updateTraffic",updateTraffic);
    }
    catch(e)
    {
        throw e;
    }
}



export async function dispatchDeleteAttraction(dispatch , attraction:Attraction=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!attraction)
            throw Resource.attractionIsNull;
        return await commonDispatch(dispatch,attraction.id,"/mapData/deleteAttraction",deleteAttraction);
    }
    catch(e)
    {
        throw e;
    }
}


export async function dispatchDeleteRestaurant(dispatch , restaurant:Restaurant=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!restaurant)
            throw Resource.restaurantIsNull;
        return await commonDispatch(dispatch,restaurant.id,"/mapData/deleteRestaurant",deleteRestaurant);
    }
    catch(e)
    {
        throw e;
    }
}


export async function dispatchDeleteSouvenir(dispatch , souvenir:Souvenir=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!souvenir)
            throw Resource.souvenirIsNull;
        return await commonDispatch(dispatch,souvenir.id,"/mapData/deleteSouvenir",deleteSouvenir);
    }
    catch(e)
    {
        throw e;
    }
}


export async function dispatchDeleteTraffic(dispatch , traffic:Traffic=null):Promise<AjaxResponse<Traffic>>
{
    try
    {
        if(!traffic)
            throw Resource.trafficIsNull;
        return await commonDispatch(dispatch,traffic.id,"/mapData/deleteTraffic",deleteTraffic);
    }
    catch(e)
    {
        throw e;
    }
}
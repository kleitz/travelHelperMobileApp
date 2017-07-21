import User from "../Model/User"
import {PlainObject,Fetch,AjaxResponse,Ajax} from "../Model/Common";
import {Action} from "redux";
export const Start = 'LoginStart'
export const End = 'LoginEnd'

export class LoginResponse implements PlainObject , Action
{
    type:string;
    data:AjaxResponse<string>;
    constructor(type:string,data:AjaxResponse<string>)
    {
        this.type=type;
        this.data=data;
    }
    public createPlainObject()
    {
        return {type:this.type,data:this.data};
    }
}

export async function dispatchLogin(dispatch,username:string="",password:string=""):Promise<AjaxResponse<string>>
{
    let user=new User();
    user.accountName=username;
    user.password=password;
    dispatch({type:Start});
    if(username || password ) // not login by cookie use async fetch
    {
        let f=new Fetch("/home/login","POST",user);
        let response:AjaxResponse<string>=await f.startFetch();
        dispatch(new LoginResponse(End,response).createPlainObject());
        return response;
    }
    else //  login by cookie use sync ajax
    {
        let f=new Ajax("/home/login","POST",user);
        let response:AjaxResponse<string>=f.startAjax();
        dispatch(new LoginResponse(End,response).createPlainObject());
        return response;
    }
}

export async function dispatchSignUp(dispatch,user:User):Promise<AjaxResponse<string>>
{
    dispatch({type:Start});
    let f=new Fetch("/home/signUp","POST",user);
    let response:AjaxResponse<string>=await f.startFetch();
    dispatch(new LoginResponse(End,response).createPlainObject());
    return response;
}

export async function dispatchLogOut(dispatch):Promise<AjaxResponse<string>>
{
    dispatch({type:Start});
    let f=new Fetch("/home/logOut","get");
    let response:AjaxResponse<string>=await f.startFetch();
    if(response.state)
    {
        response.state=false;
        response.data="";
        dispatch(new LoginResponse(End,response).createPlainObject());
        //dispatch({type:logoutClearPlan});
    }
    return response;
}
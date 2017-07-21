import {PlainObject} from "../Model/Common";
import {Action} from "redux";
export const OrientationChange = 'OrientationChange'

export class OrientationCase implements PlainObject , Action
{
    type:string;
    data:string;
    constructor(type:string,data:string)
    {
        this.type=type;
        this.data=data;
    }
    public createPlainObject()
    {
        return {type:this.type,data:this.data};
    }
}


export async function dispatchOrientationChange(dispatch,orientation:string)
{
    dispatch({type:OrientationChange,data:orientation});
}

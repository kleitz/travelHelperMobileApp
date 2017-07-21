import * as actionList from "../Action"
import * as store from "./storeInitial"


export default function login(state = store.initialState.deviceInfo, action) 
{
    switch (action.type) 
    {
        case actionList.DeviceInfo.OrientationChange:
            return Object.assign({}, state, { orientation: action.data });
        default:
            return state;
    }
}
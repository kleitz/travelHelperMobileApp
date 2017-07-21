import * as actionList from "../Action"
import * as store from "./storeInitial"


export default function login(state =store.initialState.login, action)
{
  switch (action.type) 
  {
    case actionList.Login.Start:
        return Object.assign({},state,{isFetching:true});
    case actionList.Login.End:
        return Object.assign({},state,{isFetching:false,isAuth:(<actionList.Login.LoginResponse>action).data.state,userid:(<actionList.Login.LoginResponse>action).data.data});
    default:
        return state;
  }
}
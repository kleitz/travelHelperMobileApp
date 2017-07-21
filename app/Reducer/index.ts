import * as redux from 'redux';
import * as action from "../Action";
import login from "./login";
import mapData from "./mapData";
import plans from "./plans";
import deviceInfo from "./deviceInfo"
const reducer = redux.combineReducers({login,mapData,plans,deviceInfo})
export default reducer;
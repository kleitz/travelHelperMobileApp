import * as actionList from "../Action"
import * as store from "./storeInitial"
import { Action } from "redux"


import Attraction from "../../Model/Attraction";
import Traffic from "../../Model/Traffic";
import Restaurant from "../../Model/Restaurant";
import Souvenir from "../../Model/Souvenir";


export default function mapData(state = store.initialState.mapData, action: Action) 
{
	switch (action.type) 
	{
		case actionList.MapData.addAttraction:
			return Object.assign({},state,{attractionList:[...state.attractionList, ...(<actionList.MapData.LocationResponse>action).data]});
		case actionList.MapData.addRestaurant:
			return Object.assign({},state,{restaurantList:[...state.restaurantList, ...(<actionList.MapData.LocationResponse>action).data]});
		case actionList.MapData.addSouvenir:
			return Object.assign({},state,{souvenirList:[...state.souvenirList, ...(<actionList.MapData.LocationResponse>action).data]});
		case actionList.MapData.addTraffic:
			return Object.assign({},state,{trafficList:[...state.trafficList, ...(<actionList.MapData.LocationResponse>action).data]});
		case actionList.MapData.updateAttraction:
			var newa:Attraction=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.attractionList.findIndex((v)=>v.id==newa.id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.attractionList.splice(index,1,newa);
			return nextState;

		case actionList.MapData.updateRestaurant:
			var newr:Restaurant=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.restaurantList.findIndex((v)=>v.id==newr.id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.restaurantList.splice(index,1,newr);
			return nextState;

		case actionList.MapData.updateSouvenir:
			var news:Souvenir=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.souvenirList.findIndex((v)=>v.id==news.id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.souvenirList.splice(index,1,news);
			return nextState;

		case actionList.MapData.updateTraffic:
			var newt:Traffic=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.trafficList.findIndex((v)=>v.id==newt.id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.trafficList.splice(index,1,newt);
			return nextState;

		case actionList.MapData.deleteAttraction:
			var id:string=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.attractionList.findIndex((v)=>v.id==id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.attractionList.splice(index,1);
			return nextState;

		case actionList.MapData.deleteRestaurant:
			var id:string=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.restaurantList.findIndex((v)=>v.id==id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.restaurantList.splice(index,1);
			return nextState;

		case actionList.MapData.deleteSouvenir:
			var id:string=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.souvenirList.findIndex((v)=>v.id==id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.souvenirList.splice(index,1);
			return nextState;

		case actionList.MapData.deleteTraffic:
			var id:string=(<actionList.MapData.LocationResponse>action).data[0];
			var index=state.trafficList.findIndex((v)=>v.id==id);
			var nextState:store.MapData=Object.assign({},state);
			nextState.trafficList.splice(index,1);
			return nextState;

		default:
			return state
	}
}
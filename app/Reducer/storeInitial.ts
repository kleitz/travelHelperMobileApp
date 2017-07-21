import Attraction from "../Model/Attraction";
import Traffic from "../Model/Traffic";
import Restaurant from "../Model/Restaurant";
import Souvenir from "../Model/Souvenir";
import {Plan} from "../Model/Plan";
import orientation from "../Constant/orientation"
class Stroe
{
    login:Login;
    mapData:MapData;
    plans:Array<Plan>;
    deviceInfo:DeviceInfo;
    constructor()
    {
        this.login=new Login();
        this.mapData=new MapData();
        this.plans=new Array();
        this.deviceInfo=new DeviceInfo();
    }
}

class Login
{
    isFetching:boolean;
    isAuth:boolean;
    userid:string;
    constructor(isFetching:boolean=false,isAuth:boolean=false,userid="")
    {
        this.isAuth=isAuth;
        this.isFetching=isFetching;
        this.userid=userid;
    }
}

class MapData
{
    center:[number,number];
    attractionList:Array<Attraction>;
    restaurantList:Array<Restaurant>;
    souvenirList:Array<Souvenir>;
    trafficList:Array<Traffic>;
    zoom:number;
    constructor(center:[number,number]=[22.160842601469007,113.55575307725644],zoom=5)
    {
        this.center=center;
        this.attractionList=new Array();
        this.restaurantList=new Array();
        this.souvenirList=new Array();
        this.trafficList=new Array();
        this.zoom=zoom;
    }
}

class DeviceInfo
{
    orientation:string;
    constructor(o=orientation.PORTRAIT)
    {
        this.orientation=o;
    }
}

const initialState=new Stroe();
export {Stroe,initialState,Login,MapData,DeviceInfo};

export class Plan
{
    name:string;
    country:Array<string>;
    city:Array<string>;
    appropriateDateStart:string;  //6-15
    appropriateDateEnd:string;   // 8-23
    attractionList:Array<{id:string,name:string}>;
    restaurantList:Array<{id:string,name:string}>;
    souvenirList:Array<{id:string,name:string}>;
    trafficList:Array<{id:string,name:string}>;
    traveledRecord:Array<TravelRecord>;
    buildDate:string;
    id:string;
    remark:string;
    constructor()
    {
        this.name="";
        this.id="";
        this.buildDate="";
        this.country=new Array();
        this.city=new Array();
        this.appropriateDateStart=(new Date().getMonth()+1)+"/"+new Date().getDate();
        this.appropriateDateEnd=this.appropriateDateStart;
        this.attractionList=new Array();
        this.restaurantList=new Array();
        this.souvenirList=new Array();
        this.trafficList=new Array();
        this.traveledRecord=new Array();
        this.remark="";
    }
    public check()
    {
        let pass=true;
        pass=this.name !=null && this.name.length>0 && typeof(this.name)=="string" ? pass:false;
        pass=this.remark !=null && this.remark.length>0 && typeof(this.remark)=="string" ? pass:false;
        pass=this.appropriateDateStart==null || !isNaN( new Date(this.appropriateDateStart).getTime() ) ?pass:false;
        pass=this.appropriateDateEnd==null || !isNaN( new Date(this.appropriateDateEnd).getTime() ) ?pass:false;
        for(let i of this.country)
            pass=typeof(i)=="string" ? pass:false;
        for(let i of this.city)
            pass=typeof(i)=="string" ? pass:false;
        for(let i of this.attractionList)
            pass=typeof(i.id)=="string" &&  typeof(i.name)=="string"? pass:false;
        for(let i of this.restaurantList)
            pass=typeof(i.id)=="string" &&  typeof(i.name)=="string" ? pass:false;
        for(let i of this.souvenirList)
            pass=typeof(i.id)=="string" &&  typeof(i.name)=="string"? pass:false;
        for(let i of this.trafficList)
            pass=typeof(i.id)=="string" &&  typeof(i.name)=="string" ? pass:false;
        for(let i of this.traveledRecord)
            pass=Object.assign(new TravelRecord(),i).check() ? pass:false;
        return pass;
    }
}

export class TravelRecord
{
    spentMoney:number;     // (mop)
    travelDateStart:string; // 2015-06-05
    travelDateEnd:string;   // 2015-08-23
    remark:string;
    constructor(money=0,travelDateStart="",travelDateEnd="",remark="")
    {
        this.spentMoney=money;
        this.travelDateStart=travelDateStart;
        this.travelDateEnd=travelDateEnd;
        this.remark=remark;
    }
    public check()
    {
        let pass=true;
        pass=this.remark !=null &&typeof(this.remark)=="string" ? pass:false;
        pass=this.spentMoney==null || isFinite(parseFloat(<any>this.spentMoney)) ?pass:false;
        pass=this.travelDateStart==null || !isNaN( new Date(this.travelDateStart).getTime() ) ?pass:false;
        pass=this.travelDateEnd==null || !isNaN( new Date(this.travelDateEnd).getTime() ) ?pass:false;
        return pass;
    }
}

export class PlanReportSetting
{
    static openTime=1;
    static price=2;
    static day=3;
    static total=4;
    public attractionSetting:{priority:number,order:boolean};
    public restaurantSetting:{priority:number,order:boolean};
    public souvenirSetting:{priority:number,order:boolean};
    public trafficSetting:{priority:number,order:boolean};
    constructor()
    {
        this.attractionSetting={priority:1,order:true};
        this.restaurantSetting={priority:2,order:true};
        this.souvenirSetting={priority:3,order:false};
        this.trafficSetting={priority:4,order:true};
    }
}
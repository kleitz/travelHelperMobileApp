
interface PlainObject
{
    createPlainObject()
}

class AjaxResponse<T>
{
    public state:boolean
    public msg:string
    public data:T
    constructor(state:boolean=false,msg:string="initial state",data:T=null)
    {
        this.state=state;
        this.msg=msg;
        this.data=data;
    }
}

class Fetch  // want async ? use fetch
{
    private method: string;
    private url:string;
    private  headers: any;
    private  body: any;
    constructor(url:string,method:string="GET",body:any=null)
    {
        this.url=url;
        this.method=method;
        this.headers=new Headers();
        this.body=body;
    }
    public async startFetch()
    {
        try
        {
            let response=await fetch(this.url,{method:this.method,headers:this.headers,body:this.body==null?this.body:JSON.stringify(this.body),credentials:'same-origin'});
            let data=await response.json();
            return data;
        }
        catch(e)
        {
            e= typeof(e)=="object" ?(e as Error).message :e;
            throw e;
        }
    }
}


class Ajax   // want sync ?? use ajax
{
    private method:string;
    private url:string;
    private data:any;
    constructor(url:string,method:string="GET",data:any=null)
    {
        this.method=method;
        this.url=url;
        this.data=data;
    }
    public startAjax()
    {
        let request = new XMLHttpRequest();
        let response=null;
        request.onreadystatechange=function()
        {
            if(this.readyState==4 && this.status==200)
            {
                response=JSON.parse(this.responseText);
            }
        }
        request.open(this.method,this.url,false);
        request.send(this.data);
        return response;
    }
}

class TimeCheck
{
    public static dateToYYMMDD(date:Date)
    {
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }
    public static isHHMMFormat(str:string):boolean   // str= 12:45 | 12  | 9  | 09  | 09:09
    {
        let reg=new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])?$");
        return reg.test(str);
    }
    public static notTimeOverlap(array:Array<Array<string>>,newTime:Array<string>):boolean   // [12:30,14:24] , [13:33,15:22] is error 
    {
        if(!array)   // array is empty or null
            return true;

        let x2=TimeCheck.hhmmStringToValue(newTime[0]);
        let y2=TimeCheck.hhmmStringToValue(newTime[1]);
        let newTimeCrossDay=x2 > y2 ? true : false;
        for(var i of array)
        {
            let x1=TimeCheck.hhmmStringToValue(i[0]);
            let y1=TimeCheck.hhmmStringToValue(i[1]);
            let iCrossDay=x1 > y1 ? true : false;
            if(!newTimeCrossDay && !iCrossDay)
            {
                if( (x2>=x1 && x2<y1) || (y2>x1 && y2<=y1) )        //x2y2 inside x1y1
                    return false;
                else if(x1>x2 && y1<y2)                             //x1y1 inside x2y2 
                    return false;
            }
            else                 // crossDay not implement now ,
            {
                
            }
        }
        return true;
    }
    public static notTimeOverlapInArray(array:Array<Array<string>>):boolean   // [12:30,14:24] , [13:33,15:22] is error 
    {
        let tmp;
        let pass=true;
        let p=JSON.parse(JSON.stringify(array));
        while(p.length>1)
        {
            tmp=p.splice(0,1)[0];
            pass=TimeCheck.notTimeOverlap(p,tmp) ?pass:false;
        }
        return pass;
    }
    public static timeIntervalSplitToArray(str:string):Array<string>  // str= "12:33-24:33" or "12:33 - 24:33"(had space beside - )
    {
        let tmp=str.split(/-| - /);
        if(tmp.length!=2 || !TimeCheck.isHHMMFormat(tmp[0]) || !TimeCheck.isHHMMFormat(tmp[1]))
            throw "timeIntervalSplitToArray error";
        return tmp;
    }
    public static hhmmStringToValue(str:string):number
    {
        let v=0;
        if(!TimeCheck.isHHMMFormat(str))
            throw "hhmmStringToValue error : "+str;
        let [hh,mm]=str.split(':');
        v+=parseInt(hh);
        mm ? v+=parseInt(mm)/60:null;
        return v;
    }
}








export {AjaxResponse,PlainObject,Fetch,Ajax,TimeCheck};
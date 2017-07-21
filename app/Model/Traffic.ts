import LocationCommonModel from "./LocationCommonModel"
class Traffic extends LocationCommonModel
{
    public location :Array<{lat:number,lng:number}>;
    public step :string;               // ["first to xxx and take bus number 11 to XXXX" , "then from XXXX take bus number 22 to YYYY"]
    public totalTime :number;       // 70 min
    public price:number;
    public trafficDetail   :string;    //ex on XXX need 30min  , on XXXXX need 40 min ,total 70 min
    constructor()
    {
        super();
        this.step="";
        this.totalTime=0;
        this.price=0;
        this.trafficDetail="";
    }
    public check():boolean
    {
        let pass=super.check();
        pass = !this.location ?false:pass;
        pass = typeof(this.step)!="string" || typeof(this.totalTime)!="number" || typeof(this.price)!="number" ||  typeof(this.trafficDetail)!="string" ? false:true;
        for(var i of this.location)
             pass = !Number.isFinite(parseFloat(<any>i.lat)) ||  !Number.isFinite(parseFloat(<any>i.lng)) ?false : pass;
        return pass;
    }
}
export default Traffic;
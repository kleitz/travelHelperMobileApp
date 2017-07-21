import LocationCommonModel from "./LocationCommonModel"

class Attraction extends LocationCommonModel
{
    public location :Array<{lat:number,lng:number}>;     // if may be a Street route  or just a Position
    public attractionDetail :string;
    public openTime :Array<Array<string>>;           // [ [11:30,13],[15,16] ] == " 11:30am - 13pm and 15pm - 16pm"
    public bestTime :Array<Array<string>>;
    public avoidTime    :Array<Array<string>>;
    public remark   :string;
    constructor()
    {
        super();
        this.location=new Array();
        this.attractionDetail="";
        this.openTime=new Array();
        this.bestTime=new Array();
        this.avoidTime=new Array();
        this.remark="";
    }
    public check():boolean
    {
        let pass=super.check();
        pass = !this.location ?false:pass;
        pass = typeof(this.attractionDetail)!="string" || typeof(this.remark)!="string" ?false:pass;
        for(let i of this.location)
            pass = !Number.isFinite(parseFloat(<any>i.lat)) ||  !Number.isFinite(parseFloat(<any>i.lat)) ?false : pass;
        for(let i of this.openTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string" ?false:pass;
        for (let i of this.bestTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string"  ? false : pass;
        for (let i of this.avoidTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string"  ? false : pass;
        return pass;
    }
}
export default Attraction;

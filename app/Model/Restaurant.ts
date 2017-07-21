import LocationCommonModel from "./LocationCommonModel"
class Restaurant extends LocationCommonModel
{
    public location :{lat:number,lng:number};
    public brand:string;                         // ex mcdonald , KFC because a restaurant may have few branck shop , they will have defferent name , but same brand
    public priceRange    :Array<number>;           //[11 ,300] == "$11 ~ $300" 
    public restaurantDetail :string;
    public openTime :Array<Array<string>>;
    public bestTime :Array<Array<string>>;
    public avoidTime    :Array<Array<string>>;
    public remark   :string;
    constructor()
    {
        super();
        this.brand="";
        this.priceRange=new Array();
        this.restaurantDetail="";
        this.openTime=new Array();
        this.bestTime=new Array();
        this.avoidTime=new Array();
        this.remark="";
    }
    public check():boolean
    {
        let pass=super.check();
        pass = !this.location || !Number.isFinite(parseFloat(<any>this.location.lat)) || !Number.isFinite(parseFloat(<any>this.location.lng)) || !this.brand  ?false:pass;
        pass = typeof(this.brand)!="string" || typeof(this.restaurantDetail)!="string" ||  typeof(this.remark)!="string"?false:pass;
        for(let i of this.priceRange)
            pass = i==null || typeof(i)=="number" ?pass:false;
        for (let i of this.openTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string" ?false:pass;
        for (let i of this.bestTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string" ?false:pass;
        for (let i of this.avoidTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string" ?false:pass;
        return pass;
    }
}
export default Restaurant;

/*
    brand is because it may have many Branch



*/
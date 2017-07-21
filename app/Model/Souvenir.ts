import LocationCommonModel from "./LocationCommonModel"
class Souvenir extends LocationCommonModel
{
    public location :{lat:number,lng:number};
    public brand:string;
    public recommendFood    :string;
    public price    :number;
    public dateCanBeStored  :number;
    public souvenirDetail :string;
    public openTime :Array<Array<string>>;
    public remark   :string;
    constructor()
    {
        super();
        this.brand="";
        this.recommendFood="";
        this.price=0;
        this.dateCanBeStored=0;
        this.souvenirDetail="";
        this.openTime=new Array();
        this.remark="";
    }
    public check():boolean
    {
        let pass=super.check();
        pass = typeof(this.brand)!="string" ||typeof(this.recommendFood)!="string" ||typeof(this.price)!="number" ?false:true;
        pass = typeof(this.dateCanBeStored)!="number" ||typeof(this.souvenirDetail)!="string" ||typeof(this.remark)!="string" ?false:true;
        pass = !this.location || !Number.isFinite(parseFloat(<any>this.location.lat)) || !Number.isFinite(parseFloat(<any>this.location.lng)) || !this.brand  ?false:pass;
        for (let i of this.openTime)
            pass = typeof(i[0])!="string" || typeof(i[1])!="string" ?false:pass;
        return pass;
    }
}
export default Souvenir;



/*
    brand is because it may have many Branch



*/
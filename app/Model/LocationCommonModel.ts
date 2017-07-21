export default class LocationCommonModel
{
    public id   :string;
    public country  :string;
    public city :string
    public buildDate :string;
    public builderID  :string;        // encrypto userid to decide who can modify this Location
    public builderName:string;        // for search all Location of some user build , but i think that only one user in this system , that's me
    public area :Array<string>;
    public name :string;
    constructor(id:string="",country:string="",city:string="",buildDate:string="",builderID:string="",builderName:string="",area:Array<string>=new Array(),name:string="")
    {
        this.id=id;
        this.country=country;
        this.city=city;
        this.buildDate=buildDate;
        this.builderID=builderID;
        this.builderName=builderName;
        this.area=area;
        this.name=name;
    }
    public static transTimeToOneLevelArray(array:Array<Array<string>>)
    {
        let result=new Array();
        for(var i of array)
        {
            result.push(i[0]+" - "+i[1]);
        }
        return result;
    }
    public check():boolean
    {
        let pass;
        pass = !this.country || !this.city || !this.area || !this.name ?false:true;
        return pass;
    }
}
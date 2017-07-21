import * as Crypto from "crypto"
class CTXExtension
{
    public auth:boolean;
    public send:Function;
    public render:Function;
    public accountName:string;
    public userName:string;
    public ip:string;
}


class CookieSetting
{
    public expires:Date;
    public httpOnly:boolean;
    public overwrite:boolean;
    public path:string;
    public signed:boolean;
    constructor(expires=new Date(new Date().getTime()+1000*3600*24*30)) // 1 month
    {
        this.expires= expires;
        this.httpOnly=true;
        this.overwrite=true;
        this.path="/";
        this.signed=true;
    }
}

class BasicCookie
{
    public expires:Date;
    constructor(expires=new Date(new Date().getTime()+1000*3600*24*30))
    {
        this.expires=expires;
    }
    public CookieSetting():CookieSetting
    {
        return new CookieSetting(this.expires);
    }
}
class LoginCookie extends BasicCookie
{
    private static key="cookieAESKey";
    private static algorithm="aes-256-cbc";
    public userName:string;
    public userAccount:string;
    constructor(name:string,userAccount:string)
    {
        super();
        this.userAccount=userAccount;
        this.userName=name;
    }
    public static encrypt(data:LoginCookie):string
    {
        let result="";
        var aes256=Crypto.createCipher(this.algorithm,this.key);
        result += aes256.update(JSON.stringify(data),"utf8","hex")
        result += aes256.final("hex");
        return result;
    }
    public static decrypt(str:string):LoginCookie
    {
        let result="";
        var aes256 = Crypto.createDecipher(this.algorithm,this.key);
        result += aes256.update(str, 'hex', 'utf8');
        result += aes256.final('utf8');
        let model:LoginCookie;
        try
        {
            model=JSON.parse(result);
        }
        catch(e)
        {
            throw e;
        }
        return model;
    }
}
class CommonCrypt
{
    private static key="commonAESKey";
    private static algorithm="aes-256-cbc";
    public static encrypt(data:any):string
    {
        let result="";
        var aes256=Crypto.createCipher(this.algorithm,this.key);
        result += aes256.update(JSON.stringify(data),"utf8","hex")
        result += aes256.final("hex");
        return result;
    }
    public static decrypt(str:string):any
    {
        let result="";
        var aes256 = Crypto.createDecipher(this.algorithm,this.key);
        result += aes256.update(str, 'hex', 'utf8');
        result += aes256.final('utf8');
        let data;
        try
        {
            data=JSON.parse(result);
        }
        catch(e)
        {
            throw e;
        }
        return data;
    }
}


export var LoginCookieName="LoginCookieName";
export {LoginCookie,CTXExtension,CommonCrypt};
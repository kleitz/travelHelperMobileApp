class User
{
    public id   :string;
    public accountName:string;
    public password :string;
    public userName :string;
    public email : string;
    constructor(accountName="",password="",userName="",email="")
    {
        this.id=null;
        this.accountName=accountName;
        this.password=password;
        this.userName=userName;
        this.email=email;
    }
}
export default User;
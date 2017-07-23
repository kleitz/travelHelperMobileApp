import * as React from 'react';
import Resource from "./Constant/Resource"
import * as Store from "./Reducer/storeInitial"
import User from "./Model/User"
import * as action from "./Action"
import orientationConstant from "./Constant/orientation"
import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native';
import {MKButton,MKTextField,MKColor} from "react-native-material-kit";
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';

interface props
{
    login:Store.Login;
    deviceInfo:Store.DeviceInfo;
    dispatch:Function;
}
interface state
{
    account:string;
    password:string;
    email:string;
    userName:string;

}

const portraitStyle=StyleSheet.create(
{
    view:{flex:1},
    backgroundImage:{flex: 1,resizeMode: 'cover',width:"100%",height:"100%",alignItems:"center"},
    logo:{resizeMode:"contain",flex:8,marginTop:"7%"},
    form:{flex:12,width:"100%",alignItems:"center"},
    account:{width:"70%",flex:3,justifyContent:"center",marginTop:50},
    password:{width:"70%",flex:3,justifyContent:"center"},
    textInputStyle:{color: "white",fontSize:30},
    button:{width:"70%",flex:2,borderRadius:1,elevation: 13,justifyContent: 'center',alignItems: 'center',},
});


const landscapeStyle=StyleSheet.create(
{
    view:{flex:1},
    backgroundImage:{flex: 1,resizeMode: 'cover',width:"100%",height:"100%",alignItems:"center",flexDirection:"row"},
    logo:{resizeMode:"contain",flex:8,marginLeft:"3%"},
    form:{flex:12,width:"100%",alignItems:"center"},
    account:{width:"70%",flex:3,justifyContent:"center"},
    password:{width:"70%",flex:3,justifyContent:"center"},
    textInputStyle:{color: "white",fontSize:30},
    button:{width:"70%",flex:2,borderRadius:1,elevation: 13,justifyContent: 'center',alignItems: 'center',marginTop:"2%"},
});


class SignUp extends React.Component<props,state>
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            account:"",
            password:"",
            userName:"",
            email:"",
        }
        this.accountChange=this.accountChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.userNameChange=this.userNameChange.bind(this);
        this.emailChange=this.emailChange.bind(this);
        this.signUpOnPress=this.signUpOnPress.bind(this);
    }
    render()
    {
        let style= this.props.deviceInfo.orientation==orientationConstant.LANDSCAPE?landscapeStyle:portraitStyle;
        return(
            <View style={style.view}>
                <Image source={require('./IMG/loginBG.jpg')} style={style.backgroundImage} >
                    <Image source={require('./IMG/logo.png')} style={style.logo} />
                    <View style={style.form}>
                        <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} floatingLabelBottomMargin={0} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.account} placeholderTextColor="white"/>
                        <MKTextField onTextChange={this.passwordChange} text={this.state.password} placeholder={Resource.password} floatingLabelEnabled={true} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.password} placeholderTextColor="white" />
                        <MKTextField onTextChange={this.userNameChange} text={this.state.userName} placeholder={Resource.userName} floatingLabelEnabled={true} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.password} placeholderTextColor="white" />
                        <MKTextField onTextChange={this.emailChange} text={this.state.email} placeholder={Resource.email} floatingLabelEnabled={true} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.password} placeholderTextColor="white" />
                        <MKButton style={style.button} backgroundColor="#26A69A" onPress={this.signUpOnPress}>
                            <Icon name="send" size={50} color="white" />
                        </MKButton>
                    </View>
                </Image>
            </View>
        )
    }

    accountChange(v){this.setState({account:v})}
    passwordChange(v){this.setState({password:v});}
    emailChange(v){this.setState({email:v});}
    userNameChange(v){this.setState({userName:v});}

    signUpOnPress()
    {
        
    }
    componentWillMount()
    {

    }
    componentDidMount()
    {
        
    }
}


function mapStateToProps(state:Store.Stroe)
{
    return {login:state.login,deviceInfo:state.deviceInfo};
}



export default connect(mapStateToProps)(SignUp);
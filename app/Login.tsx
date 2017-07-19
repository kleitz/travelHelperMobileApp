import * as React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native';
import {MKButton,MKTextField,MKColor} from "react-native-material-kit";
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Resource from "./constant/Resource"
interface props
{

}
interface state
{
    account:string;
    password:string;
}

const style=StyleSheet.create(
{
    view:{flex:1, flexDirection: 'column'},
    logo:{maxWidth:"100%",maxHeight:"40%",marginTop:"2%",resizeMode:"contain"},
    textField:{width:"70%",marginLeft:"15%",marginTop:"5%" ,height:"10%"},
    textInputStyle:{color: "white",fontSize:30},
    backgroundImage:{flex: 1,resizeMode: 'cover',width: null,height: null},
    button:{width:"70%",marginLeft:"15%",marginTop:"5%",borderRadius:2,elevation: 13,justifyContent: 'center',alignItems: 'center',},
});




export default class Login extends React.Component<props,state>
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            account:"",
            password:"",
        }
        this.accountChange=this.accountChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.loginOnPress=this.loginOnPress.bind(this);
        this.signUpOnPress=this.signUpOnPress.bind(this);
    }
    render()
    {
        return(
            <View style={style.view}>
                <Image source={require('./IMG/loginBG.jpg')} style={style.backgroundImage} >
                    <Image source={require('./IMG/logo.png')} style={style.logo} />
                    <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.textField} placeholderTextColor="white"/>
                    <MKTextField onTextChange={this.passwordChange} text={this.state.password} placeholder={Resource.password} floatingLabelEnabled={true} highlightColor="#26A69A" tintColor="white" textInputStyle={style.textInputStyle} style={style.textField} placeholderTextColor="white" />
                    <MKButton style={style.button} backgroundColor="#26A69A">
                        <Icon name="send" size={50} color="white" />
                    </MKButton>
                    <MKButton style={style.button} >
                        <Text style={{color: "white",fontSize:30}}>{Resource.signUpText}</Text>
                    </MKButton>
                </Image>
            </View>
        )
    }

    accountChange(v){this.setState({account:v});}
    passwordChange(v){this.setState({password:v});}

    loginOnPress()
    {

    }

    signUpOnPress()
    {
        
    }
    componentWillMount()
    {

    }
}
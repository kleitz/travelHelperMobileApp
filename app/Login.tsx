import * as React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native';
import {MKButton,MKTextField,MKColor} from "react-native-material-kit";
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import Resource from "./constant/Resource"
interface props
{

}
interface state
{
    account:string;
}

const style=StyleSheet.create(
{
    view:{flex:1, flexDirection: 'column'},
    logo:{maxWidth:"100%",maxHeight:200,marginTop:30,resizeMode:"contain"},
    textField:{width:"70%",marginLeft:"15%"},
    textInputStyle:{color: "white"},
    backgroundImage:{flex: 1,resizeMode: 'cover',width: null,height: null},
});




export default class Login extends React.Component<props,state>
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            account:"",
        }
        this.accountChange=this.accountChange.bind(this);
    }
    render()
    {
        
        return(
            <View style={style.view}>
                <Image source={require('./IMG/loginBG.jpg')} style={style.backgroundImage} >
                
                    <Image source={require('./IMG/logo.png')} style={style.logo} />
                    <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} tintColor={"white"} textInputStyle={style.textInputStyle} style={style.textField} />
                <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} tintColor={"white"} textInputStyle={style.textInputStyle} style={style.textField} />
                <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} tintColor={"white"} textInputStyle={style.textInputStyle} style={style.textField} />
                <MKTextField onTextChange={this.accountChange} text={this.state.account} placeholder={Resource.account} floatingLabelEnabled={true} tintColor={"white"} textInputStyle={style.textInputStyle} style={style.textField} />
                </Image>
            </View>
        )
    }

    accountChange(v){this.setState({account:v});}

    componentWillMount()
    {

    }
}
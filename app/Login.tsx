import * as React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {MKButton} from "react-native-material-kit";
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';


const style=
{
    view:{flex:1, flexDirection: 'column',backgroundColor:"lightblue"} as any,
    logo:{maxWidth:"100%",height:300}as any,
};

export default class Login extends React.Component<any,any>
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            
        }
    }
    render()
    {
        const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    Actions['login']({k:this.props.k+1 || 1});
  })
  .build();
        return(
            <View style={style.view}>
                <Image source={require('./IMG/logo.png')} style={style.logo} resizeMode ="contain"/>
                <Text>{this.props.k}</Text>
                <ColoredRaisedButton />
            </View>
        )
    }
}
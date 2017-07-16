import * as React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {MKButton} from "react-native-material-kit";
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';


const style=
{
    view:{flex: 1, flexDirection: 'row'} as any,
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
        return(
            <View style={style.view}>
                <Image source={require('./IMG/logo.jpg')} />
            </View>
        )
    }
}
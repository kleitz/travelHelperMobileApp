import * as React from 'react';
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import Login from "./Login"
import routingKey from "./constant/routingKey"
export default class App extends React.Component<any,any>
{
	render() 
	{
		return (
			<Router createReducer={reducerCreator} tintColor='red'>
				<Scene key={routingKey.root}>
					<Scene key={routingKey.login} component={Login} title="Login" type="replace"/>
				</Scene>
			</Router>
		)
	}
}


function reducerCreator(params)
{
	const defaultReducer=new Reducer(params);
	return (state, action) => 
	{
		console.log('ACTION:', action);
		return defaultReducer(state, action);
	};
}
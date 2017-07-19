import * as React from 'react';
import {Scene,Router,Actions,Reducer} from 'react-native-router-flux';
import { connect } from 'react-redux'
import Login from "./Login"
import routingKey from "./constant/routingKey"
class App extends React.Component<any,any>
{
	render() 
	{
		return (
			<Router createReducer={reducerCreator} tintColor='red'>
				<Scene key={routingKey.root}>
					<Scene key={routingKey.login} component={Login} type='replace' initial={true} hideNavBar={true}/>
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
export default connect((store)=>store)(App);